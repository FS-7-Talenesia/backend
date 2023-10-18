const multer = require('multer')
const storage = multer.memoryStorage()
const maxSize = 1024 * 1024 * 2

module.exports = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true)
        } else {
            cb("Format file must be JPG, JPEG", false);
        }
    },
    limits: { fileSize: maxSize }
}).single('img')