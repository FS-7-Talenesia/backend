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

            await passwordHandler.checkPassword(user.password, password)

            const token = createToken({
                _id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
            });
            return {token}

        } catch (error) {
            return {
                response: 404,
                status: "FAIL",
                message: "username or password is incorrect",
                error: error.message
            }
        }
    }
}