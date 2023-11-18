const moduleService = require('../services/moduleSvc');

function getAllModules(req, res) {
  moduleService.getModules(req).then((data) => {
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

function getModuleDetail(req, res) {
  moduleService.getModule(req).then((data) => {
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

function createNewModule(req, res) {
  moduleService.createModule(req).then((data) => {
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

// function deleteModule(req, res) {
//   moduleService.deleteModule(req).then((data) => {
//     res.status(200).json({
//       response: data.response,
//       status: data.status,
//       message: data.message,
//       error: data.error
//     })
//   }).catch((error) => {
//     res.status(400).json({
//       error: error.message
//     })
//   })
// }

// function updateModule(req, res) {
//   moduleService.updateModule(req).then((data) => {
//     res.status(200).json({
//       response: data.response,
//       status: data.status,
//       message: data.message,
//       error: data.error
//     })
//   }).catch((error) => {
//     res.status(400).json({
//       error: error.message
//     })
//   })
// }


module.exports = {
  getAllModules,
  getModuleDetail,
  createNewModule,
  // deleteModule,
  // updateModule
}