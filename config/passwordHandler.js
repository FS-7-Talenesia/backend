const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();

const encryptPassword = (password) => {
    try {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, parseInt(process.env.SALT), (err, encryptedPassword) => {
                if (!!err) {
                    reject(err);
                    return;
                }

                resolve(encryptedPassword);
            });
        });
    } catch (error) {
        res.status(400).json({
            status: "FAIL",
            message: error.message,
        });
    }
}

function checkPassword(encryptedPassword, password) {
    try {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, encryptedPassword, (err, isPasswordCorrect) => {
                if (!!err) {
                    reject(err);
                    return;
                }

                resolve(isPasswordCorrect);
            });
        });
    } catch (error) {
        res.status(400).json({
            status: "FAIL",
            message: error.message,
        });
    }
}

module.exports = {
    encryptPassword,
    checkPassword,
}