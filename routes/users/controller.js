const { User } = require('../../models');
const { hashPassword } = require('../../helpers');

module.exports = {
    userRegistration: async (req, res) => {
        const { name, email, password } = req.body;

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
};
