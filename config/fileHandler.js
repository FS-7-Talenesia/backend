const multer = require('multer')
const storage = multer.memoryStorage()
const maxSize = 1024 * 1024 * 2

module.exports = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "application/pdf") {
            cb(null, true)
        } else {
            cb("Format file must be PNG, JPG, JPEG, PDF", false);
        }
    },
    limits: { fileSize: maxSize }
}).single('file')