const mongoose = require('mongoose')

const fileSubmissionSchema = new mongoose.Schema({
    file_name: {
        type: String,
    },
    answered: {
        type: Number,
        default: 0,
    },
    upload_date: {
        type: Date,
    },
    submission_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'submission'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})

const fileSubmission = mongoose.model('fileSubmission', fileSubmissionSchema)

module.exports = fileSubmission