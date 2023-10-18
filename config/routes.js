const express = require('express')
const router = express.Router()
const userImgHandler = require('./userImgHandler')
const {userCtrl} = require('../app/controllers/index')
<<<<<<< HEAD
const {courses} = require('..app/controllers/index')

=======
>>>>>>> e5f0d0e (first commit)

//user Routes
router.get('/user', userCtrl.listUserHandle)
router.get('/user/:id', userCtrl.findUserByIdHandle)
router.post('/user/create/', userCtrl.createUserHandle)
router.put('/user/update/:id', userImgHandler, userCtrl.updateUserHandle)
router.delete('/user/delete/:id', userCtrl.deleteUserHandle)

<<<<<<< HEAD
//courses routes
router.get('/course/:id', courses.getCourses)
router.post('/course', courses.createCourse)
router.put('/course/:id', courses.updateCourse)
router.delete('/course/:id', courses.deleteCourse)

module.exports = router
=======
module.exports = router
>>>>>>> e5f0d0e (first commit)
