const userRepo = require('../repositories/userRepo')
const {giveCurrentDateTime} = require('../../config/dateTime')
const passwordHandler = require('../../config/passwordHandler')
const joiSchema = require('../../config/joiSchema')
const { ref, getDownloadURL, uploadBytesResumable, deleteObject } = require("firebase/storage");
const storage  = require("../../config/firebaseStorage");

module.exports = {

    async listUser() {
        try {
            const user = await userRepo.findAll()
            
            if(user === null){
                throw new Error("user not found")
            }

            return {user}
        } catch (error) {
            return {
                response: 404,
                status: "FAIL",
                message: "an error has occured",
                error: error.message,
            }
        }
    },

    async findUserById(req) {
        try {
            const id = req.params.id
            const user = await userRepo.findById(id)
            
            if (user === null) {
                throw new Error("user not found")
            }

            return { user }
        } catch (error) {
            return {
                response: 404,
                status: "FAIL",
                message: "an error has occured",
                error: error.message,
            }
        }
    },

    async createUser(req) {
        try {
            const img = "/image/default_user_icon.png"
            const password = joiSchema.password(req.body.password)
            const encrypted = await passwordHandler.encryptPassword(password)
            const email = joiSchema.email(req.body.email)
            const role = joiSchema.role(req.body.role)
            const username = joiSchema.username(req.body.username)
            const name = joiSchema.name(req.body.name)
            const age = joiSchema.age(req.body.age)
            const gender = joiSchema.gender(req.body.gender)

            const usernameData = await userRepo.findOne({ username: username})
            const emailData = await userRepo.findOne({ email: email })

            if (usernameData){
                throw new Error("Username already exist")
            } 
            if (emailData) {
                throw new Error("Email already exist")
            }

            const user = await userRepo.create({
                username: username,
                password: encrypted,
                name: name,
                age: age,
                role: role,
                gender: gender,
                email: email,
                img: img
            })

            return { user }

        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to create user",
                error: error.message,
            }
        }
    },

    async updateUser(req) {
        try {
            const id = req.params.id
            const userData = await userRepo.findById(id)

            if (userData.img === "/image/default_user_icon.png")
            {
                const dateTime = giveCurrentDateTime()
                const storageRef = ref(storage, `user_img/${req.file.originalname + "_" + dateTime}`)
                const metadata = {
                    contentType: req.file.mimetype,
                };
                const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata)

                const img = await getDownloadURL(snapshot.ref)
                const email = joiSchema.email(req.body.email)
                const username = joiSchema.username(req.body.username)
                const name = joiSchema.name(req.body.name)
                const age = joiSchema.age(req.body.age)
                const gender = joiSchema.gender(req.body.gender)

                const user = await userRepo.update(req.params.id, {
                    username: username,
                    name: name,
                    age: age,
                    gender: gender,
                    email: email,
                    img: img
                })

                return { user }
            } else {
                const deleteOldImage = ref(storage, `${userData.img}`)
                deleteObject(deleteOldImage)

                const dateTime = giveCurrentDateTime()
                const storageRef = ref(storage, `user_img/${req.file.originalname + "_" + dateTime}`)
                const metadata = {
                    contentType: req.file.mimetype,
                };
                const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata)

                const img = await getDownloadURL(snapshot.ref)
                const email = joiSchema.email(req.body.email)
                const username = joiSchema.username(req.body.username)
                const name = joiSchema.name(req.body.name)
                const age = joiSchema.age(req.body.age)
                const gender = joiSchema.gender(req.body.gender)

                const user = await userRepo.update(req.params.id, {
                    username: username,
                    name: name,
                    age: age,
                    gender: gender,
                    email: email,
                    img: img
                })

                return { user }
            }
            
        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to update user",
                error: error.message,
            }
        }
    },
    async deleteUser(req) {
        try {
            const id = req.params.id
            const userData = await userRepo.findById(id)

            if (userData.img === "/image/default_user_icon.png"){
                const user = await userRepo.delete({
                    _id: id
                })

                return { user }
            } else {
                const deleteOldImage = ref(storage, `${userData.img}`)
                deleteObject(deleteOldImage)

                const user = await userRepo.delete({
                    _id: id
                })

                return { user }
            }
        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to delete user",
                error: error.message,
            }
        }
    },
}