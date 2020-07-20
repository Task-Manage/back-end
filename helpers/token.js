const jwt = require('jsonwebtoken')
const {
    JWT_SECRET
} = require('../config')

module.exports = {
    createToken: (userData) => {
        const token = jwt.sign(userData, JWT_SECRET, {
            expiresIn: '5m'
        })

        return token;
    },
    verifyToken: (req, res, next) => {
        const bearerToken = req.headers.authorization;

        if (!bearerToken) {
            return res.send({
                message: `There is no token`
            })
        }

        try {
            const token = bearerToken.split('')[1]
            const decoded = jwt.verify(token, JWT_SECRET)

            if (decoded) {
                next()
            }
        } catch (error) {
            res.send({
                message: error.message
            })
        }
    }
}