const question = require('../models/questionModel')

module.exports = {
    findAll() {
        try {
            return question.find().populate('choices_id')
        } catch (error) {
            throw new Error("Data not found", error)
        }
    },
    
    findById(id) {
        try {
            return question.findOne({ _id: id }).populate('choices_id')
        } catch (error) {
            throw new Error("Data not found")
        }
    },

    create(Args) {
        try {
            return question.create(Args)
        } catch (error) {
            throw new Error("Failed create data to database", error)
        }
    },

    update(id, Args) {
        try {
            return question.updateOne({ _id: id }, Args)
        } catch (error) {
            throw new Error("Failed update data to database", error)
        }
    },

    delete(id) {
        try {
            return question.deleteOne({ _id: id })
        } catch (error) {
            throw new Error("Failed delete data to database", error)
        }
    }
} 