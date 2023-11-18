const userRepo = require("../../repositories/userRepo")
const jwt = require("jsonwebtoken")
const dotenv = require('dotenv')
dotenv.config()

async function authorize(req, res, next, authorizedRoles) {
    try {
        const bearerToken = req.headers.authorization
        const token = bearerToken.split("Bearer ")[1]
        const tokenPayload = jwt.verify(token, process.env.JWT_SIGNATURE_KEY || "Rahasia")
     
        const user = await userRepo.findOne({_id: tokenPayload._id});
        req.user = user

        if (!authorizedRoles.includes(user.role)) {
            res.status(401).json({
                status: "FAIL",
                message: "Unauthorized access"
            })
            return
        } else {
            next()
        }

    } catch (err) {
        res.status(401).json({
            message: err.message,
        })
    }
}

function authorizeAll(req, res, next) {
    authorize(req, res, next, ["admin", "teacher", "student"])
}

function authorizeAdminAndTeacher(req, res, next) {
    authorize(req, res, next, ["admin", "teacher"])
}

function authorizeAdmin(req, res, next) {
    authorize(req, res, next, ["admin"])
}

function authorizeTeacher(req, res, next) {
    authorize(req, res, next, ["teacher"])
}

function authorizeStudent(req, res, next) {
    authorize(req, res, next, ["student"])
}

module.exports = {
    authorizeAll,
    authorizeAdminAndTeacher,
    authorizeAdmin,
    authorizeTeacher,
    authorizeStudent
}