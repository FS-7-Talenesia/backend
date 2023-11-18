const assignmentService = require('../services/assignmentSvc');

function getAllAssignments(req, res) {
  assignmentService.getAssignments(req).then((data) => {
    res.status(200).json({
      response: data.response,
      status: data.status,
      message: data.message,
      error: data.error
    })
  }).catch((error) => {
    res.status(400).json({
      error: error.message
    })
  })
}

function getAssignmentDetail(req, res) {
  assignmentService.getAssignment(req).then((data) => {
    res.status(200).json({
      response: data.response,
      status: data.status,
      message: data.message,
      error: data.error
    })
  }).catch((error) => {
    res.status(400).json({
      error: error.message
    })
  })
}

function createNewAssignment(req, res) {
  assignmentService.createAssignment(req).then((data) => {
    res.status(200).json({
      response: data.response,
      status: data.status,
      message: data.message,
      error: data.error
    })
  }).catch((error) => {
    res.status(400).json({
      error: error.message
    })
  })
}

module.exports = {
  getAllAssignments,
  getAssignmentDetail,
  createNewAssignment
}