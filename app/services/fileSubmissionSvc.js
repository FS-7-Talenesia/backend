const fileSubmissionRepo = require('../repositories/fileSubmissionRepo')
const giveCurrentDateTime = require('../../config/dateTime')
const { ref, getDownloadURL, uploadBytesResumable, deleteObject } = require("firebase/storage");
const storage  = require('../../config/firebaseStorage');

module.exports = {
    async listFile() {
        try {
            const user_file = await fileSubmissionRepo.findAll()
            
            if (user_file === null) {
                throw new Error("file not found")
            }

            return { user_file }
        } catch (error) {
            return {
                response: 404,
                status: "FAIL",
                message: "file not found",
                error: error.message,
            }
        }
    },

    async uploadFile(req) {
        try {
            const dateTime = giveCurrentDateTime()
            const storageRef = ref(storage, `file_submission/${req.file.originalname +"_"+ dateTime}`)

            const metadata = {
                contentType: req.file.mimetype,
            };

            const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata)
            const file_url = await getDownloadURL(snapshot.ref)
            
            const user_file = await fileSubmissionRepo.create({
                file_name: file_url,
                user_id: req.user._id
            })

            return { user_file }

        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to upload file",
                error: error.message,
            }
        }
    },

    async updateFile(req) {
        try {
            const id = req.params.id
            const fileData = await fileSubmissionRepo.findById(id)
            const fileJSON = JSON.stringify(fileData)
            const userParse = JSON.parse(fileJSON)
            const fileUrl = userParse.file_name

            if (fileUrl) {
                const deleteOldImage = ref(storage, `${fileUrl}`)
                deleteObject(deleteOldImage)

                const dateTime = giveCurrentDateTime()
                const storageRef = ref(storage, `file_submission/${req.file.originalname + "_" + dateTime}`)

                const metadata = {
                    contentType: req.file.mimetype,
                };

                const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata)
                const file_url = await getDownloadURL(snapshot.ref)

                const user_file = await fileSubmissionRepo.update(req.params.id, {
                    file_name: file_url,
                    user_id: req.user._id
                })

                return { user_file }
            }

        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to update file",
                error: error.message,
            }
        }
    },

    async deleteFile(req) {
        try {
            const id = req.params.id
            const fileData = await fileSubmissionRepo.findById(id)
            const fileJSON = JSON.stringify(fileData)
            const userParse = JSON.parse(fileJSON)
            const fileUrl = userParse.file_name

            if (fileUrl) {

                const deleteOldFile = ref(storage, `${fileUrl}`)
                deleteObject(deleteOldFile)

                const user_file = await fileSubmissionRepo.delete({
                    _id: id
                })

                return { user_file }

            } 

        } catch (error) {
            return {
                response: 400,
                status: "FAIL",
                message: "failed to delete file",
                error: error.message,
            }
        }
    },
}