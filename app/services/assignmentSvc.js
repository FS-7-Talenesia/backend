const assignmentRepo = require('../repositories/assignmentRepo');

module.exports = {
  async getAssignemnts(req) {
    try {
      const { moduleId } = req.params;

      const assignments = await assignmentRepo.findAll(moduleId);

      return assignments;
    } catch (error) {
      return {
        response: 400,
        status: "FAIL",
        message: "failed to get assignments",
        error: error.message
      }
    }
  },

  async getAssignment(req) {
    try {
      const { assignmentId } = req.params;

      const assignment = await assignmentRepo.findOne(assignmentId);

      return assignment;
    } catch (error) {
      return {
        response: 400,
        status: "FAIL",
        message: "failed to get assignment",
        error: error.message
      }
    }
  },

  async createAssignment(req) {
    try {
      const {
        type,
        name,
        description,
        due_date,
        question,
        answer,
        grades,
        request_for_review,
        countdown,
        question_navigation,
        allow_attempt,
        max_attemp
      } = req.body
  
      const assignment = await assignmentRepo.create({
        type,
        name,
        description,
        due_date,
        question,
        answer,
        grades,
        request_for_review,
        countdown,
        question_navigation,
        allow_attempt,
        max_attemp
      })
  
      return assignment;
    } catch (error) {
      return {
        response: 400,
        status: "FAIL",
        message: "failed to create assignment",
        error: error.message
      }
    }
  },

  async updateAssignment(req) {
    try {
      const { assignmentId } = req.params;
      const {
        type,
        name,
        description,
        due_date,
        question,
        answer,
        grades,
        request_for_review,
        countdown,
        question_navigation,
        allow_attempt,
        max_attemp
      } = req.body
  
      const assignment = await assignmentRepo.update({
        type,
        name,
        description,
        due_date,
        question,
        answer,
        grades,
        request_for_review,
        countdown,
        question_navigation,
        allow_attempt,
        max_attemp
      }, assignmentId)
  
      return assignment;
    } catch (error) {
      return {
        response: 400,
        status: "FAIL",
        message: "failed to update assignment",
        error: error.message
      }
    }
  },

  async deleteAssignment(req) {
    try {
      const { assignmentId } = req.params;

      await assignmentRepo.delete(assignmentId);

      return {
        message: 'Assignment successfully deleted'
      }
    } catch (error) {
      return {
        response: 400,
        status: "FAIL",
        message: "failed to delete assignment",
        error: error.message
      }
    }
  }
}