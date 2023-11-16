const questionRepo = require('../repositories/questionRepo')
const choicesRepo = require('../repositories/choicesRepo')

module.exports = {
    async listChoices() {
        try {
            const choices = await choicesRepo.findAll()

            if (!choices) {
                throw new Error("choices not found")
            }

            return { choices }
        } catch (error) {
            return {
                response: 404,
                status: "FAIL",
                message: "an error has occured",
                error: error.message,
            }
        }
    },

    async findChoicesById(req) {
        try {
            const choicesId = req.params.id
            const choices = await choicesRepo.findById(choicesId)

            if (!choices) {
                throw new Error("choices not found")
            }

            return { choices }
        } catch (error) {
            return {
                response: 404,
                status: "FAIL",
                message: "an error has occured",
                error: error.message,
            }
        }
    },

    async createChoices(req) {
        try {
            const {letter, answer_text, correct} = req.body

            const choices = await choicesRepo.create({
                letter: letter,
                answer_text: answer_text,
                correct: correct
            })
            
            await questionRepo.update(req.params.question_id,
                { $push: { choices_id: choices.id } },
                { new: true, useFindAndModify: false }
            )

            return { choices }

        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to create choices",
                error: error.message,
            }
        }
    },

    async updateChoices(req) {
        try {
            const choicesId = req.params.id
            const {letter, choices_text, correct} = req.body

            const choices = await choicesRepo.update(choicesId, {
                letter: letter,
                choices_text: choices_text,
                correct: correct
            })

            return { choices }

        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to update choices",
                error: error.message,
            }
        }
    },

    async deleteChoices(req) {
        try {
            const choicesId = req.params.id

            const choices = await choicesRepo.delete({
                _id: choicesId,
            })

            return { choices }

        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to update choices",
                error: error.message,
            }
        }
    },
}