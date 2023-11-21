const submissionRepo = require('../repositories/submissionRepo')
const moment = require('moment');

module.exports = {
    async listSubmission(req) {
        try {
            const submission = await submissionRepo.findAll()

            if (submission === null) {
                throw new Error("submission not found")
            }

            return { submission }
        } catch (error) {
            return {
                response: 404,
                status: "FAIL",
                message: "an error has occured",
                error: error.message,
            }
        }
    },

    async listSubmissionById(req) {
        try {
            const id = req.params.id
            const submission = await submissionRepo.findById(id)
            
            if (submission === null) {
                throw new Error("submission not found")
            }

            return { submission }
        } catch (error) {
            return {
                response: 404,
                status: "FAIL",
                message: "an error has occured",
                error: error.message,
            }
        }
    },

    async createSubmissionForFile(req) {
        try {
            const type_submission = "file submission"
            const {deadlines, repeat, max_repeat, open} = req.body

            const d = moment(deadlines, 'YYYY-MM-DD-HH-mm-ss').toDate();

            const submission = await submissionRepo.create({
                type_submission: type_submission,
                deadlines: d,
                max_repeat: max_repeat,  
                repeat: repeat, 
                open: open
            })

            if (!submission.repeat) {
                await submissionRepo.update(submission.id, {
                    max_repeat: 1
                })
            } else {
                await submissionRepo.update(submission.id, {
                    max_repeat: max_repeat
                })
            }

            return { submission }

        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to create file submission",
                error: error.message,
            }
        }
    },

    async createSubmissionForMultipleChoice(req) {
        try {
            const type_submission = "multiple choice submission"
            const { deadlines, repeat, max_repeat, open } = req.body

            const d = moment(deadlines, 'YYYY-MM-DD-HH-mm-ss').toDate();

            const submission = await submissionRepo.create({
                type_submission: type_submission,
                deadlines: d,
                repeat: repeat,
                open: open
            })

            if (!submission.repeat) {
                await submissionRepo.create({
                    max_repeat: 1
                })
            } else {
                await submissionRepo.create({
                    max_repeat: max_repeat
                })
            }

            return { submission }

        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to create multiple choice submission",
                error: error.message,
            }
        }
    },

    async updateSubmission(req) {
        try {
            const id = req.params.id
            const { deadlines, repeat, max_repeat, open } = req.body

            const submission = await submissionRepo.update(id,{
                deadlines: deadlines,
                repeat: repeat,
                max_repeat: max_repeat,
                open: open
            })

            return { submission }
        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to update submission",
                error: error.message,
            }
        }
    },

    async deleteSubmission(req) {
        try {
            const id = req.params.id
            
            const submission = await submissionRepo.delete({
                _id: id
            })

            return { submission } 
        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to delete submission",
                error: error.message,
            }
        }
    },
}