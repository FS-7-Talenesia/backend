const userRepo = require('../repositories/userRepo')
const passwordHandler = require('../../config/passwordHandler')
const jwt = require('jsonwebtoken')

const createToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SIGNATURE_KEY || "Secret");
}

module.exports = {
    async userLogin(req) {
        try {
            const username = req.body.username
            const password = req.body.password

            const user = await userRepo.findOne({
                username: username,
            })

            const isPasswordCorrect = await passwordHandler.checkPassword(user.password, password)
           
            if (isPasswordCorrect) {    
                const token = createToken({
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    role: user.role,
                });

                return { token }
            } else {
                throw new Error('username or password is invalid')
            }

        } catch (error) {
            return {
                response: 401,
                status: "FAIL",
                message: "An error has occured",
                error: error.message
            }
        }
    }
}