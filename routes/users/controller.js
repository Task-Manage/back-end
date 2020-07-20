const {
    User
} = require('../../models');

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
    getAllUser: async (req, res) => {
        try {
            const result = await User.find()
            res.send({
                result
            })
        } catch (error) {
            res.send(error)
        }
    }
};