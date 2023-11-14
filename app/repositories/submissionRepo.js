const submission = require('../models/submissionModel')

module.exports = {
    findAll() {
        try {
            return submission.find().populate('fileSubmission_id')
        } catch (error) {
            throw new Error("Data not found", error) 
        }
    },

    findById(id) {
        try {
            return submission.findById({ _id: id }).populate('fileSubmission_id')
        } catch (error) {
            throw new Error("Data not found", error)
        }
    },

    findOne(Args) {
        try {
            return submission.findOne(Args);
        } catch (error) {
            throw new Error("Data not found", error);
        }
    },

    create(Args) {
        try {
            return submission.create(Args)
        } catch (error) {
            throw new Error("Failed create data to database", error)
        }
    },

    update(id, Args) {
        try {
            return submission.updateOne({_id:id}, Args)
        } catch (error) {
            throw new Error("Failed update data to database", error)
        }
    },

    delete(id) {
        try {
            return submission.deleteOne({_id:id})
        } catch (error) {
            throw new Error("Failed delete data to database", error)
        }
    }
} 