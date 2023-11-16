const multipleChoiceBankQuestionRepo = require('../repositories/multipleChoiceBankQuestionRepo')
const questionRepo = require('../repositories/questionRepo')

module.exports = {
    async listQuestion() {
        try {
            const question = await questionRepo.findAll()

            if (!question) {
                throw new Error("question not found")
            }

            return { question }
        } catch (error) {
            return {
                response: 404,
                status: "FAIL",
                message: "an error has occured",
                error: error.message,
            }
        }
    },

    async findQuestionById(req) {
        try {
            const id = req.params.id
            const question = await questionRepo.findById(id)

            if (!question) {
                throw new Error("question not found")
            }

            return { question }
        } catch (error) {
            return {
                response: 404,
                status: "FAIL",
                message: "an error has occured",
                error: error.message,
            }
        }
    },

    async createQuestion(req) {
        try {
            const {number, question_text} = req.body

            const question = await questionRepo.create({
                number: number,
                question_text: question_text,
            })
            
            await multipleChoiceBankQuestionRepo.update(req.params.multiple_choice_question_bank_id,
                { $push: { question_id: question.id } },
                { new: true, useFindAndModify: false }
            )

            return { question }

        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to create question",
                error: error.message,
            }
        }
    },

    async updateQuestion(req) {
        try {
            const questionId = req.params.id
            const {number, question_text} = req.body

            const question = await questionRepo.update(questionId, {
                number: number,
                question_text: question_text,
            })

            return { question }

        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to update question",
                error: error.message,
            }
        }
    },

    async deleteQuestion(req) {
        try {
            const questionId = req.params.id

            const question = await questionRepo.delete({
                _id: questionId,
            })

            return { question }

        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to update question",
                error: error.message,
            }
        }
    },
}