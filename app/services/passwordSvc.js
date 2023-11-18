const userRepo = require('../repositories/userRepo')
const {sendForgot} = require('../../config/email')
const passwordHandler = require('../../config/passwordHandler')
const generateRandomToken = require('../../config/generateToken')
const joiSchema = require('../../config/joiSchema')
require('dotenv').config()

module.exports = {
    async sendForgotPassword(req) {
        try {
            const email = req.body.email
            const user = await userRepo.findOne({ email: email })
        
            if (!user) {
                throw new Error('email not registered')
            }

            const token = generateRandomToken(32)
            const userToken = await userRepo.update(user.id, {
                token_reset_password: token,
                token_reset_password_expires: new Date()
            })
    
            const sendEmail = await userRepo.findOne({ token_reset_password: token })
            await sendForgot(sendEmail);
            
            return { userToken }
        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to create token",
                error: error.message
            }
        }
    },

    async resetPassword(req) {
        try {
            const userData = await userRepo.findOne({ token_reset_password: req.params.token_reset_password })

            if (!userData) {
                throw new Error('user not found')
            }
            
            const password = joiSchema.password(req.body.password)
            const confirmPassword = joiSchema.password(req.body.confirmPassword)

            if (password !== confirmPassword){
                throw new Error('password do not match')
            } else if (userData.token_reset_password === undefined) {
                throw new Error("token is undefined, please generate the token")
            }

            const encrypted = await passwordHandler.encryptPassword(confirmPassword)

            const getTime = new Date(userData.token_reset_password_expires)
            const expiresIn = new Date()
            expiresIn.setMinutes(expiresIn.getMinutes() + 15)

            if (expiresIn > getTime && req.params.token_reset_password === userData.token_reset_password) {
                const user = await userRepo.update(userData.id, {
                    password: encrypted,
                    $unset: {
                        token_reset_password: 1,
                        token_reset_password_expires: 1,
                    }
                })

                return { user }
            }

        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "the token has expired, please generate the token",
                error: error.message
            }
        }
    },

    async changePassword(req) {
        try {

            const password = joiSchema.password(req.body.password)
            const confirmPassword = joiSchema.password(req.body.confirmPassword)

            if (password !== confirmPassword) {
                throw new Error('password do not match')
            }

            const encrypted = await passwordHandler.encryptPassword(confirmPassword)

            const user = await userRepo.update(req.user.id, {
                password: encrypted
            })

            return { user }
        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to change password",
                error: error.message
            }
        }
    },
}