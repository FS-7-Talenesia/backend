const multipleChoiceBankQuestionRepo = require('../repositories/multipleChoiceBankQuestionRepo')

module.exports = {
    async listBankQuestion() {
        try {
            const bank_question = await multipleChoiceBankQuestionRepo.findAll()

            if (!bank_question) {
                throw new Error("bank question not found")
            }

            return { bank_question }
        } catch (error) {
            return {
                response: 404,
                status: "FAIL",
                message: "an error has occured",
                error: error.message,
            }
        }
    },

    async findBankQuestionById(req) {
        try {
            const id = req.params.id
            const bank_question = await multipleChoiceBankQuestionRepo.findById(id)

            if (!bank_question) {
                throw new Error("bank question not found")
            }

            return { bank_question }
        } catch (error) {
            return {
                response: 404,
                status: "FAIL",
                message: "an error has occured",
                error: error.message,
            }
        }
    },

    async createBankQuestion(req) {
        try {
            const question_name = req.body.question_name

            const bank_question = await multipleChoiceBankQuestionRepo.create({
                question_name: question_name,
            })

            return { bank_question }

        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to create bank question",
                error: error.message,
            }
        }
    },

    async updateBankQuestion(req) {
        try {
            const id = req.params.id
            const question_name = req.body.question_name

            const bank_question = await multipleChoiceBankQuestionRepo.update(id, {
                question_name: question_name,
            })

            return { bank_question }

        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to update bank_question",
                error: error.message,
            }
        }
    },

    async deleteBankQuestion(req) {
        try {
            const id = req.params.id
            
            const bank_question = await multipleChoiceBankQuestionRepo.delete({
                _id: id,
            })

            return { bank_question }

        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to update bank_question",
                error: error.message,
            }
        }
    },
}