const choicesRepo = require('../repositories/choicesRepo')
const multipleChoiceGradeRepo = require('../repositories/multipleChoiceGradeRepo')

module.exports = {
    async listMultipleChoiceGrade() {
        try {
            const user_answered = await multipleChoiceGradeRepo.findAll()
            const choices = await choicesRepo.find()
            
            if (!user_answered) {
                throw new Error("multiple choice grade not found")
            }

            return { user_answered,choices }
        } catch (error) {
            return {
                response: 404,
                status: "FAIL",
                message: "an error has occured",
                error: error.message,
            }
        }
    },

    async findMultipleChoiceGradeById(req) {
        try {
            const id = req.params.id
            const user_grade = await multipleChoiceGradeRepo.findById(id)

            if (!user_grade) {
                throw new Error("multiple choice grade not found")
            }

            return { user_grade }
        } catch (error) {
            return {
                response: 404,
                status: "FAIL",
                message: "an error has occured",
                error: error.message,
            }
        }
    },

    async createMultipleChoiceGrade(req) {
        try {
            const user_answer = req.body.user_answer

            const user_grade = await multipleChoiceGradeRepo.create({
                user_answer: user_answer,
            })

            return { user_grade }

        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to create multiple choice grade",
                error: error.message,
            }
        }
    },

    async updateMultipleChoiceGrade(req) {
        try {
            const id = req.params.id
            const question_name = req.body.question_name

            const user_grade = await multipleChoiceGradeRepo.update(id, {
                question_name: question_name,
            })

            return { user_grade }

        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to update multiple choice grade",
                error: error.message,
            }
        }
    },

    async deleteMultipleChoiceGrade(req) {
        try {
            const id = req.params.id

            const bank_question = await multipleChoiceGradeRepo.delete({
                _id: id,
            })

            return { bank_question }

        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to delete multiple choice grade",
                error: error.message,
            }
        }
    },
}