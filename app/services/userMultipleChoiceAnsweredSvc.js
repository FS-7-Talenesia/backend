const userMultipleChoiceAnsweredRepo = require('../repositories/userMultipleChoiceAnsweredRepo')

module.exports = {
    async listMultipleChoiceAnswered() {
        try {
            const user_answered = await userMultipleChoiceAnsweredRepo.findAll()

            if (!user_answered) {
                throw new Error("multiple choice answered not found")
            }

            return { user_answered, choices }
        } catch (error) {
            return {
                response: 404,
                status: "FAIL",
                message: "an error has occured",
                error: error.message,
            }
        }
    },

    async findMultipleChoiceAnsweredById(req) {
        try {
            const id = req.params.id
            const user_answered = await userMultipleChoiceAnsweredRepo.findById(id)

            if (!user_answered) {
                throw new Error("multiple choice answered not found")
            }

            return { user_answered, choices }
        } catch (error) {
            return {
                response: 404,
                status: "FAIL",
                message: "an error has occured",
                error: error.message,
            }
        }
    },

    async createMultipleChoiceAnswered(req) {
        try {
            const answered = req.body.user_answered

            const user_answered = await userMultipleChoiceAnsweredRepo.create({
                user_answered: answered,
            })

            return { user_answered }

        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to create multiple choice answered",
                error: error.message,
            }
        }
    },

    async updateMultipleChoiceAnswered(req) {
        try {
            const id = req.params.id
            const answered = req.body.question_name

            const user_answered = await userMultipleChoiceAnsweredRepo.update(id, {
                question_name: answered,
            })

            return { user_answered }

        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to update multiple choice answered",
                error: error.message,
            }
        }
    },

    async deleteMultipleChoiceAnswered(req) {
        try {
            const id = req.params.id

            const user_answered = await userMultipleChoiceAnsweredRepo.delete({
                _id: id,
            })

            return { user_answered }

        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to delete multiple choice answered",
                error: error.message,
            }
        }
    },
}