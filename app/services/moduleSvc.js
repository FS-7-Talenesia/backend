const moduleRepo = require('../repositories/moduleRepo')

module.exports = {
  async getModules(req) {
    try {
      const { courseId } = req.params;

      const modules = await moduleRepo.findAll(courseId)

      return {modules};
    } catch (error) {
      return {
        response: 404,
        status: "FAIL",
        message: "modules not found",
        error: error.message
      }
    }
  },

  async getModule(req) {
    try {
      const { moduleId } = req.params;

      const module = await moduleRepo.findOne(moduleId);

      return { module };
    } catch (error) {
      return {
        response: 404,
        status: "FAIL",
        message: "module not found",
        error: error.message
      }
    }
  },

  async createModule(req) {
    try {
      const {
        courseId,
        title,
        description,
        img,
      } = req.body;

      const module = await moduleRepo.create({
        courseId,
        title,
        description,
        img,
        enroll: false
      })

      return {module};
    } catch (error) {
      return {
        response: 404,
        status: "FAIL",
        message: "failed to create module",
        error: error.message
      }
    }
  },

  async deleteModule(req) {
    try {
      const { moduleId } = req.body;

      await moduleRepo.delete(moduleId);

      return {
        message: 'Module successfully deleted'
      }
    } catch (error) {
      return {
        response: 500,
        status: "FAIL",
        message: "failed to delete to module",
        error: error.message
      }
    }
  },

  async enrollModule(req) {
    try {
      const { moduleId } = req.params;
      const { enroll } = req.body;
  
      const enrolledModule = await moduleRepo.update({
        moduleId,
        enroll
      })
  
      return {enrolledModule}
    } catch (error) {
      return {
        response: 500,
        status: "FAIL",
        message: "failed to enroll to module",
        error: error.message
      }
    }
  }

}