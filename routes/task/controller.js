const { Task, User } = require('../../models');

module.exports = {
    createTask: async (req, res) => {
        const { id } = req.params;
        const { assignment, status } = req.body;
        try {
            const author = await User.findById(id);
            const result = await Task.create({
                assignment,
                status,
                inCharge: author.name,
            });
            res.send(result);
        } catch (error) {
            console.log(error);
        }
    },
};
