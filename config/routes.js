const express = require('express')
const router = express.Router()
const userImgHandler = require('./userImgHandler')
const {courses} = require('..app/controllers/index')
const {userCtrl, loginCtrl} = require('../app/controllers/index')
const authorization = require('./userRole')

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

router.get('/course/:id', courses.getCourses)
router.post('/course', courses.createCourse)
router.put('/course/:id', courses.updateCourse)
router.delete('/course/:id', courses.deleteCourse)

module.exports = router

