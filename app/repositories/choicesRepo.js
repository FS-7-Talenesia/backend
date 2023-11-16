const choices = require('../models/choicesModel')

module.exports = {
    findAll() {
        try {
            return choices.find()
        } catch (error) {
            throw new Error("Data not found", error)
        }
    },
    
    findById(id) {
        try {
            return choices.findOne({ _id: id })
        } catch (error) {
            throw new Error("Data not found")
        }
    },

    create(Args) {
        try {
            return choices.create(Args)
        } catch (error) {
            throw new Error("Failed create data to database", error)
        }
    },

    update(id, Args) {
        try {
            return choices.updateOne({ _id: id }, Args)
        } catch (error) {
            throw new Error("Failed update data to database", error)
        }
    },

    delete(id) {
        try {
            return choices.deleteOne({ _id: id })
        } catch (error) {
            throw new Error("Failed delete data to database", error)
        }
    }
} 