const express = require('express')
const router = express.Router()
const userImgHandler = require('./userImgHandler')
const authorization = require('./userRole')
const { userCtrl, loginCtrl, courses } = require('../app/controllers/index')

//Login
router.post('/login', loginCtrl.loginHandle)

//User routes
router.get('/user', userCtrl.listUserHandle)
router.get('/user/:id', userCtrl.findUserByIdHandle)
router.post('/user/create/',
    authorization.authorizeAdmin,
    userCtrl.createUserHandle)
router.put('/user/update/:id', userImgHandler, userCtrl.updateUserHandle)
router.delete('/user/delete/:id', userCtrl.deleteUserHandle)

//courses routes
// router.get('/course/:id', courses.getCourses)
// router.post('/course', courses.createCourse)
// router.put('/course/:id', courses.updateCourse)
// router.delete('/course/:id', courses.deleteCourse)

module.exports = router

