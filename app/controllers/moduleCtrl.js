const { defaultFormat } = require('moment');
const { getModules, getModule, createModule, deleteModule} = require('../services/moduleSvc');

function getAllModulesHandle(req, res) {
  getModules(req).then((data) => { 
    if (data.response) {
      res.status(data.response).json({
        response: data.response,
        status: data.status,
        message: data.message,
        error: data.error
      })
    }
    else {
      res.status(200).json({
        status: "OK",
        message: "Modules retrieved successfully",
        data: data
      })
    }
  }
  ).catch((error) => {
    res.status(400).json({
      error: error.message
    })
  })
} 

function getModuleByIdHandle(req, res) {
    getModule(req).then((data) => {
        if (data.response) {
        res.status(data.response).json({
            response: data.response,
            status: data.status,
            message: data.message,
            error: data.error
        })
        } else {
        res.status(200).json({
            status: "OK",
            message: "Module retrieved successfully",
            data: data
        })
        }
    }).catch((error) => {
        res.status(400).json({
        error: error.message
        })
    })
}

function createModuleHandle(req, res) {
  createModule(req).then((data) => {
    if (data.response) {
      res.status(data.response).json({
        response: data.response,
        status: data.status,
        message: data.message,
        error: data.error
      })
    } else {
      res.status(200).json({
        status: "OK",
        message: "Module created successfully",
        data: data
      })
    }
  }).catch((error) => {
    res.status(400).json({
      error: error.message
    })
  })
}

function deleteModuleHandle(req, res) {
  deleteModule(req).then((data) => {
    if (data.response) {
      res.status(data.response).json({
        response: data.response,
        status: data.status,
        message: data.message,
        error: data.error
      })
    } else {
      res.status(200).json({
        status: "OK",
        message: "Module deleted successfully",
        data: data
      })
    }
  }).catch((error) => {
    res.status(400).json({
      error: error.message
    })
  })
}




module.exports = {
  getAllModulesHandle,
  getModuleByIdHandle,
  createModuleHandle,
  deleteModuleHandle,
}
