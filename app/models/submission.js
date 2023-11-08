const mongoose = require('mongoose')

const submissionSchema = new mongoose.Schema({
    value: {
        type: Number,
        maxLength: 100,
    },
    deadlines: {
        type: Date,
    },
    repeat: {
        type: Boolean,
    },
    max_repeat: {
        type: Number,
    },
    open: {
        type: Boolean,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})

const submission = mongoose.model('submission', submissionSchema)

module.exports = submission