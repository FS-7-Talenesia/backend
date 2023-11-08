const mongoose = require('mongoose')

const fileSubmissionSchema = new mongoose.Schema({
    file_name: {
        type: String,
    },
    // submission_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'fileSubmission'
    // },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})

const fileSubmission = mongoose.model('fileSubmission', fileSubmissionSchema)

module.exports = fileSubmission