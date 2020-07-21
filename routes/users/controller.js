const { User } = require('../../models');
const { hashPassword } = require('../../helpers');
const bcrypt = require('bcryptjs');
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
            const checkedUser = await User.findOne({ email });

            if (checkedUser) {
                return res.send({
                    message: `Email is already registered`,
                });
            }

            const hashedPassword = await hashPassword(password);

            await User.create({
                name,
                email,
                password: hashedPassword,
            });

            res.send({
                message: `Registration success`,
            });
        } catch (error) {
            console.error(error);
        }
    },
    getAllUser: async (req, res) => {
        try {
            const result = await User.find()
            res.send({
                result
            })
        } catch (error) {
          res.send(error)
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