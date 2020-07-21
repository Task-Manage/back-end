const { Task, User } = require('../../models');

module.exports = {
    createTask: async (req, res) => {
        const { assignment, assignee } = req.body;

        try {
            await Task.create({
                assignment,
                assignee,
            });

            res.send({
                message: 'Task succesfully added',
            });
        } catch (error) {
            console.log(error);
        }
    },
};
