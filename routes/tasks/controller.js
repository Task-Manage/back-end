const { Task, User } = require('../../models');

module.exports = {
    createTask: async (req, res) => {
        const { assignment, assignee } = req.body;

        try {
            const task = await Task.create({
                assignment,
                assignee,
            });

            const user = await User.findById(assignee);
            user.tasks.push(task._id);

            await user.save();

            res.send({
                message: 'Task succesfully added',
                result: user,
            });
        } catch (error) {
            console.log(error);
        }
    },
    deleteTask: async (req, res) => {
        const { id } = req.params;

        try {
            await Task.findByIdAndDelete(id);

            res.send({
                message: `Task successfully deleted`,
            });
        } catch (error) {
            console.error(error);
        }
    },
};
