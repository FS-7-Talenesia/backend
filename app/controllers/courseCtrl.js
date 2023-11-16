
const { getCourses, getCourseById, createCourse, updateCourse, deleteCourse } = require('../services/courseSvc');


function getCoursesHandle(req, res){
  getCourses(req).then(data => {
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
        message: "Courses retrieved successfully",
        Courses: data,
      })
    }
  }).catch(error => {
    res.status(400).json({
      error: error.message
    })
  })
}

function getCourseByIdHandle(req, res){
  const courseId = req.params.id;
  getCourseById(req).then(data => {
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
        message: "Course retrieved successfully",
        Course: data,
      })
    }
  }).catch(error => {
    res.status(400).json({
      error: error.message
    })
  })  

}

function createCourseHandle(req, res){
  createCourse(req).then(data => {
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
        message: "Course created successfully",
      })
    }
  }).catch(error => {
    res.status(400).json({
      error: error.message
    })
  })
}

function updateCourseHandle(req, res){
  updateCourse(req).then(data => {
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
        message: "Course updated successfully",
      })
    }
  }).catch(error => {
    res.status(400).json({
      error: error.message
    })
  })
}

function deleteCourseHandle(req, res){
  deleteCourse(req).then(data => {
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
        message: "Course deleted successfully",
      })
    }
  }).catch(error => {
    res.status(400).json({
      error: error.message
    })
  })
}




module.exports = {
  getCoursesHandle,
  getCourseByIdHandle,
  createCourseHandle,
  updateCourseHandle,
  deleteCourseHandle,
};
