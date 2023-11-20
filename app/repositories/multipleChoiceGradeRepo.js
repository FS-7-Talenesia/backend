const multipleChoiceGrade = require('../models/multipleChoiceGradeModel')

module.exports = {
    findAll() {
        try {
            return multipleChoiceGrade.find()
        } catch (error) {
            throw new Error("Data not found", error)
        }
    },

    findById(id) {
        try {
            return multipleChoiceGrade.findOne({ _id: id }).populate({
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

    create(Args) {
        try {
            return multipleChoiceGrade.create(Args)
        } catch (error) {
            throw new Error("Failed create data to database", error)
        }
    },

    update(id, Args) {
        try {
            return multipleChoiceGrade.updateOne({ _id: id }, Args)
        } catch (error) {
            throw new Error("Failed update data to database", error)
        }
    },

    delete(id) {
        try {
            return multipleChoiceGrade.deleteOne({ _id: id })
        } catch (error) {
            throw new Error("Failed delete data to database", error)
        }
    }
} 