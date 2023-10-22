const express = require('express')
const router = express.Router()
const multer = require('./fileHandler')
const {userCtrl} = require('../app/controllers/index')
<<<<<<< HEAD
=======
const {courses} = require('..app/controllers/index')

>>>>>>> 088a13a (adding routes)

//user Routes
router.get('/user-list', userCtrl.listUserHandle)
// router.get('/user-list/:videoId/', userCtrl.userListByVideoId)
router.post('/user', userCtrl.createUserHandle)
router.put('/user/:id', userCtrl.updateUserHandle)
router.delete('/user/:id', userCtrl.deleteUserHandle)

<<<<<<< HEAD
module.exports = router
=======
//courses routes
router.get('/course/:id', courses.getCourses)
router.post('/course', courses.createCourse)
router.put('/course/:id', courses.updateCourse)
router.delete('/course/:id', courses.deleteCourse)

module.exports = router
>>>>>>> 088a13a (adding routes)
