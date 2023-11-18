const multer = require('multer');
const storage = multer.memoryStorage();
const maxSize = 1024 * 1024 * 20;

const imageUpload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb("Format file must be JPG, JPEG", false);
        }
    },
    limits: { fileSize: maxSize }
}).single('img');

const fileUpload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "application/pdf" || 
            file.mimetype == "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || 
            file.mimetype == "application/msword") {
            cb(null, true);
        } else {
            cb("Format file must be pdf, docx and doc", false);
        }
    },
    limits: { fileSize: maxSize }
}).single('file_name');

module.exports = {
    imageUpload,
    fileUpload
};