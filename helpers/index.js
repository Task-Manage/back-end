const { hashPassword } = require('./bcrypt');

const {
    createToken,
    verifyToken
} = require('./token')

module.exports = {
    createToken,
    verifyToken,
    hashPassword,
}
