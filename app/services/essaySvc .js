const essayRepo = require('../repositories/essayRepo')

module.exports = {
    async createEssai(req) {
        try {
            const {number, question, value, deadlines, repeat, max_repeat, open} = req.body

            if (!number){
                throw new Error("number cannot be empty")
            } else if(!question){
                throw new Error("question cannot be empty")
            } else if (!repeat){
                
            }

            const user = await essayRepo.findOne({
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