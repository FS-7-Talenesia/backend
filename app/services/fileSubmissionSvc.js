const fileSubmissionRepo = require('../repositories/fileSubmissionRepo')
const submissionRepo = require('../repositories/submissionRepo')
const {giveCurrentDateTime} = require('../../config/dateTime')
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
            const isSubmission = await submissionRepo.findById(req.params.submission_id)

            if (!isSubmission.open) {
                throw new Error('this submission has not yet been opened')
            }

            if (new Date() >= isSubmission.deadlines) {
                throw new Error('submissions are not allowed, check the time specified for submitting files')
            }

            const dateTime = giveCurrentDateTime()
            const storageRef = ref(storage, `file_submission/${req.file.originalname +"_"+ dateTime}`)

            const metadata = {
                contentType: req.file.mimetype,
            };

            const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata)
            const file_url = await getDownloadURL(snapshot.ref)
            
            const user_file = await fileSubmissionRepo.create({
                file_name: file_url,
                answered: 1,
                upload_date: new Date(),
                user_id: req.user._id,
                submission_id: req.params.submission_id
            })
        
            await submissionRepo.update(user_file.submission_id, 
                {$push:{fileSubmission_id: user_file.id}},
                { new: true, useFindAndModify: false }
            )

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
            const isSubmission = await submissionRepo.findById(req.params.submission_id)

            if (!isSubmission.open) {
                throw new Error('this submission has not yet been opened')
            }

            if (new Date() >= isSubmission.deadlines) {
                throw new Error('submissions are not allowed, check the time specified for submitting files')
            }

            if (!isSubmission.repeat) {
                throw new Error('submissions are not allowed to be done more than once')
            }

            const fileData = await fileSubmissionRepo.findByUserId(req.user._id)
            console.log(fileData)

            if (!fileData) {
                throw new Error('file not found')
            }

            if (isSubmission.max_repeat === fileData.answered) {
                throw new Error('the file submission limit has been reached')
            }

            const deleteOldFile = ref(storage, `${fileData.file_name}`)
            deleteObject(deleteOldFile)

            const dateTime = giveCurrentDateTime()
            const storageRef = ref(storage, `file_submission/${req.file.originalname + "_" + dateTime}`)

            const metadata = {
                contentType: req.file.mimetype,
            };

            const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata)
            const file_url = await getDownloadURL(snapshot.ref)


            const user_file = await fileSubmissionRepo.update(fileData._id,{
                file_name: file_url,
                upload_date: new Date(),
                answered: ++fileData.answered
            })

            return { user_file }
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

            if (fileData) {

                const deleteOldFile = ref(storage, `${fileData.file_name}`)
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