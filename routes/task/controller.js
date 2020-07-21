const { Task, User } = require('../../models');

module.exports = {
    createTask: async (req, res) => {
        const { id } = req.params;
        const { assignment, status, reviews } = req.body;
        try {
            const result = await Task.create({
                assignment,
                status,
                assignee: id,
                reviews,
            });
            res.send(result);
        } catch (error) {
            console.log(error);
        }
    },
};
