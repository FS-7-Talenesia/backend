const fileSubmission = require('../models/fileSubmissionModel')

module.exports = {
    findAll() {
        try {
            return fileSubmission.find().populate('user_id')
        } catch (error) {
            throw new Error("Data not found", error) 
        }
    },

    findById(id) {
        try {
            return fileSubmission.findById({_id:id})
        } catch (error) {
            throw new Error("Data not found")
        }
    },

    findOne(Args) {
        try {
            return fileSubmission.findOne(Args);
        } catch (error) {
            throw new Error("Data not found");
        }
    },

    create(Args) {
        try {
            return fileSubmission.create(Args)
        } catch (error) {
            throw new Error("Failed create data to database", error)
        }
    },

    update(id, Args) {
        try {
            return fileSubmission.updateOne({_id:id}, Args)
        } catch (error) {
            throw new Error("Failed update data to database", error)
        }
    },

    delete(id) {
        try {
            return fileSubmission.deleteOne({_id:id})
        } catch (error) {
            throw new Error("Failed delete data to database", error)
        }
    }
} 