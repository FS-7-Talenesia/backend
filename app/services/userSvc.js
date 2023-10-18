const userRepo = require('../repositories/userRepo')
const giveCurrentDateTime = require('../../config/dateTime')
const { ref, getDownloadURL, uploadBytesResumable, deleteObject } = require("firebase/storage");
const { storage } = require("../../config/firebaseStorage");

module.exports = {

    async listUser() {
        try {
            const user = await userRepo.findAll()
            
            return { user }
        } catch (error) {
            return {
                response: 404,
                msg: "user not found",
                error: error.message,
            }
        }
    },

    async findUserById(req) {
        try {
            const id = req.params.id
            const user = await userRepo.findById(id)

            return { user }
        } catch (error) {
            return {
                response: 404,
                msg: "User not found",
                error: error.message,
            }
        }
    },

    async createUser(req) {
        try {
            const img = "/image/default_user_icon.png"
            const { username, password, name, age, role, gender, email} = req.body
           
            if (!username || !password || !name || !age || !role || !gender || !email) {
                throw new Error("Make sure everything is filled in")
            }
        
            const user = await userRepo.create({
                username:username,
                password:password,
                name:name,
                age:age,
                role:role,
                gender:gender,
                email:email,
                img:img
            })

            return { user }
        } catch (error) {
            return {
                response: 400,
                status: "Fail",
                msg: "Failed to create user",
                error: error.message,
            }
        }
    },

    async updateUser(req) {
        try {
            const id = req.params.id
            const userData = await userRepo.findById(id)
            const userJSON = JSON.stringify(userData)
            const userParse = JSON.parse(userJSON)
            const imageUrl = userParse.img

            if (imageUrl === "/image/default_user_icon.png")
            {
                const dateTime = giveCurrentDateTime()
                const storageRef = ref(storage, `user_img/${req.file.originalname + "_" + dateTime}`)
                const metadata = {
                    contentType: req.file.mimetype,
                };
                const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata)

                const img = await getDownloadURL(snapshot.ref)

                const { username, password, name, age, gender, email } = req.body

                const user = await userRepo.update(req.params.id, {
                    username: username,
                    password: password,
                    name: name,
                    age: age,
                    gender: gender,
                    email: email,
                    img: img
                })

                return { user }
            } else {
                const deleteOldImage = ref(storage, `${imageUrl}`)
                deleteObject(deleteOldImage)

                const dateTime = giveCurrentDateTime()
                const storageRef = ref(storage, `user_img/${req.file.originalname + "_" + dateTime}`)
                const metadata = {
                    contentType: req.file.mimetype,
                };
                const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata)

                const img = await getDownloadURL(snapshot.ref)

                const { username, password, name, age, gender, email } = req.body

                const user = await userRepo.update(req.params.id, {
                    username: username,
                    password: password,
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
                status: "Fail",
                msg: "Failed to update user",
                error: error.message,
            }
        }
    },
    async deleteUser(req) {
        try {
            const id = req.params.id
            const userData = await userRepo.findById(id)
            const userJSON = JSON.stringify(userData)
            const userParse = JSON.parse(userJSON)
            const imageUrl = userParse.img

            if (imageUrl === "/image/default_user_icon.png"){
                const user = await userRepo.delete({
                    _id: id
                })

                return { user }
            } else {
                const deleteOldImage = ref(storage, `${imageUrl}`)
                deleteObject(deleteOldImage)

                const user = await userRepo.delete({
                    _id: id
                })

                return { user }
            }
        } catch (error) {
            return {
                response: 400,
                status: "Fail",
                msg: "Failed to delete user",
                error: error.message,
            }
        }
    },
}