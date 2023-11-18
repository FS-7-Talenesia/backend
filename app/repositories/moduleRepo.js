const module_ = require('../models/moduleModel');

module.exports = {
  
  findAll(courseId) {
    try {
      return module_.find({course_id: courseId})
    } catch (error) {
      throw new Error('Failed to get modules', error);
    }
  },

  findOne(moduleId) {
    try {
      return module_.findOne({
        _id: moduleId,
      })
    } catch (error) {
      throw new Error('Failed to get module', error)
    }
  },

  create(args) {
    try {
      return module_.create(args);
    } catch (error) {
      throw new Error('Failed to create module', error)
    }
  },

  update(args) {
    try {
      const { moduleId, ...data } = args

      return module_.updateOne({_id: moduleId}, data);
    } catch (error) {
      throw new Error('Failed to update module', error)
    }
  },

  delete(moduleId) {
    try {
      return module_.deleteOne({_id: moduleId})
    } catch (error) {
      throw new Error('Failed to delete module', error)
    }
  }
}