
const courseModel = require('../models/courseModel');

module.exports = {
    async findAll() {
        try {
            return await courseModel.find();
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async findOne(id) {
        try {
            return await courseModel.findById(id);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async create(data) {
        try {
            const course = new courseModel(data);
            return await course.save();
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async update(id, data) {
        try {
            return await courseModel.findByIdAndUpdate(id, data, { new: true });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async enroll(id) {
        try {
            return await courseModel.findByIdAndUpdate(id, { enroll: true }, { new: true });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async unenroll(id) {
        try {
            return await courseModel.findByIdAndUpdate(id, { enroll: false }, { new: false });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async completestatus(id) {
        try{
            return await courseModel.findByIdAndUpdate(id, { completed: true }, { new: true });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async delete(id) {
        try {
            return await courseModel.findByIdAndDelete(id);
        } catch (error) {
            throw new Error(error.message);
        }
    }
};
