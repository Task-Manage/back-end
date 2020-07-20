const bcrypt = require('bcryptjs');

const {
    User
} = require('../../models');
const {
    createToken
} = require('../../helpers/token');

module.exports = {
    userRegistration: async (req, res) => {
        const {
            name,
            email,
            password
        } = req.body;

        try {
            const newUser = await User.create({
                name,
                email,
                password,
            });

            res.send({
                message: `Registration success`,
                data: newUser,
            });
        } catch (error) {
            console.error(error);
        }
    },
    userLogin: async (req, res) => {
        const {
            email,
            password
        } = req.body

        const registeredUser = await User.findOne({
            email
        })

        if (registeredUser) {
            bcrypt.compare(password, registeredUser.password)
                .then((result => {
                    if (result === true) {
                        const userData = {
                            id: registeredUser._id
                        }

                        const token = createToken(userData)
                        res.send({
                            message: `Login Successfull`,
                            token
                        })
                    } else {
                        return res.send(`Your email or password is wrong`)
                    }
                }))
        } else {
            res.send(`Your email is not registered`)
        }
    }
};