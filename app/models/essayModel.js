const mongoose = require('mongoose')

const essaySchema = new mongoose.Schema({
    number: {
        type: String,
    },
    question: {
        type: String,
    },
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

const essay = mongoose.model('essay', essaySchema)

module.exports = essay