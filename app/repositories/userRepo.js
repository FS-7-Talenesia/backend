const user = require('../models/userModel')

module.exports = {

    findAll() {
        try {
            return user.find()
        } catch (error) {
            throw new Error("Data not found", error) 
        }
    },

    findById(id) {
        try {
            return user.findById({_id:id})
        } catch (error) {
            throw new Error("Data not found")
        }
    },

    findOne(username) {
        try {
            return user.findOne(username);
        } catch (error) {
            throw new Error("Data not found");
        }
    },

    create(Args) {
        try {
            return user.create(Args)
        } catch (error) {
            throw new Error("Failed create data to database", error)
        }
    },

    update(id, Args) {
        try {
            return user.updateOne({_id:id}, Args)
        } catch (error) {
            throw new Error("Failed update data to database", error)
        }
    },

    delete(id) {
        try {
            return user.deleteOne({_id:id})
        } catch (error) {
            throw new Error("Failed delete data to database", error)
        }
    }
} 