const assignment = require('../models/assignmentModel');

module.exports = {
  
  findAll(moduleId) {
    try {
      return assignment.find({module_id: moduleId})
    } catch (error) {
      throw new Error('Failed to get assignments', error);
    }
  },

  findOne(assignmentId) {
    try {
      return assignment.findOne({
        _id: assignmentId,
      })
    } catch (error) {
      throw new Error('Failed to get assignment', error)
    }
  },

  create(args) {
    try {
      return assignment.create(args);
    } catch (error) {
      throw new Error('Failed to create assignment', error)
    }
  },

  update(args, assignmentId) {
    try {
      return assignment.updateOne({_id: assignmentId}, args);
    } catch (error) {
      throw new Error('Failed to update assignment', error)
    }
  },

  delete(assignmentId) {
    try {
      return assignment.deleteOne({_id: assignmentId})
    } catch (error) {
      throw new Error('Failed to delete assignment', error)
    }
  }
}