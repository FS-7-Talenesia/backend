const userRepo = require('../repositories/userRepo')
const {sendEmail} = require('../../config/email')
const generateRandomToken = require('../../config/generateToken')
require('dotenv').config()

module.exports = {
    async sendEmailVerify(req) {
        try {
            if(req.user.verified === true) {
                throw new Error('email has been verified')
            }

            const token = generateRandomToken(32)
            await userRepo.update(req.params.id, {
                token_email_verify: token,
                token_email_verify_expires: new Date()
            })

            const user = await userRepo.findOne({ token_email_verify: token })
            await sendEmail(user)

            const emailToken = user.token_email_verify
            return { emailToken }

        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to create token",
                error: error.message
            }
        }
    },

    async emailVerify(req) {
        try {
            if (req.user.token_email_verify === undefined) {
                throw new Error("token is undefined, please generate the token")
            }
            
            const getTime = new Date(req.user.token_email_verify_expires)
            const expiresIn = new Date()
            expiresIn.setMinutes(expiresIn.getMinutes() + 15)
            
            if (expiresIn > getTime && req.params.token === req.user.token_email_verify) {
        
                await userRepo.update(req.user.id, {
                    verified: true,
                    $unset: {
                        token_email_verify: 1, 
                        token_email_verify_expires: 1,
                    }
                })

                const user = await userRepo.findOne({ _id: req.user.id })
                const verified = user.verified
                return {verified}
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
}