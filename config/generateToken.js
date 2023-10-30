const randomBytes = require('randombytes')

function generateRandomToken(length) {
    return randomBytes(length).toString('hex')
}

module.exports = generateRandomToken