const userRepo = require('../repositories/userRepo')
const { ref, getDownloadURL, uploadBytesResumable, deleteObject } = require("firebase/storage");
const { storage, firebaseConfig } = require("../../config/firebase-config");

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

    // async userListByVideoId(req) {
    //     try {
    //         const videoId = req.params.videoId
    //         const user = await userRepo.findById(videoId)

    //         return { user }
    //     } catch (error) {
    //         return {
    //             response: 404,
    //             msg: "Video thumbnail not found",
    //             error: error.message,
    //         }
    //     }
    // },

    async createUser(req) {
        try {
            const { username, password, name, age, gender, email, role, level, img } = req.body

            if (!username || !password || !name || !age || !gender || !email || !role || !level || !img) {
                throw new Error("Make sure everything is filled in")
            }

            const user = await userRepo.create({
                username:username,
                password:password,
                name:name,
                age:age,
                gender:gender,
                email:email,
                role:role,
                level:level,
                img: ""
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
            const { username, password, name, age, gender, email, role, level, img } = req.body
            
            if (!username || !password || !name || !age || !gender || !email || !role || !level || !img) {
                throw new Error("Make sure everything is filled in")
            }

            const user = await userRepo.update(req.params.id, {
                username: username,
                password: password,
                name: name,
                age: age,
                gender: gender,
                email: email,
                role: role,
                level: level,
                img: img
            })

            return { user }
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

            const user = await userRepo.delete({
                _id: id
            })

            return { user }
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