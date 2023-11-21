const multipleChoiceQuestionBank = require('../models/multipleChoiceQuestionBankModel')

module.exports = {
    findAll() {
        try {
            return multipleChoiceQuestionBank.find().populate({
                path: 'question_id',
                populate: {
                    path: 'choices_id',
                    model: 'choices'
                }
            })
        } catch (error) {
            throw new Error("Data not found", error)
        }
    },

    findById(id) {
        try {
            return multipleChoiceQuestionBank.findOne({ _id: id }).populate({
                path: 'question_id',
                populate: {
                    path: 'choices_id',
                    model: 'choices'
                }
            })
        } catch (error) {
            throw new Error("Data not found")
        }
    },

    findByUserId(userId) {
        try {
            return multipleChoiceQuestionBank.findOne({ user_id: userId })
        } catch (error) {
            throw new Error("Data not found", error);
        }
    },

    create(Args) {
        try {
            return multipleChoiceQuestionBank.create(Args)
        } catch (error) {
            throw new Error("Failed create data to database", error)
        }
    },

    update(id, Args) {
        try {
            return multipleChoiceQuestionBank.updateOne({ _id: id }, Args)
        } catch (error) {
            throw new Error("Failed update data to database", error)
        }
    },

    delete(id) {
        try {
            return multipleChoiceQuestionBank.deleteOne({ _id: id })
        } catch (error) {
            throw new Error("Failed delete data to database", error)
        }
    }
} 