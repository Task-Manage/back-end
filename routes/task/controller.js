const { Task, User } = require('../../models');

module.exports = {
    createTask: async (req, res) => {
        const { assignment, status } = req.body;
        try {
            const result = await Task.create({
                assignment,
                assignee,
            });
            res.send(result);
        } catch (error) {
            console.log(error);
        }
    },
};
