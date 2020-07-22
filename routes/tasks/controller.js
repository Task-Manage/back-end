const { Task, User } = require('../../models');

module.exports = {
    getAllTasks: async (req, res) => {
        try {
            const results = await Task.find().populate('assignee', 'name');

            res.send(results);
        } catch (error) {
            console.error(error);
        }
    },
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
    getAllTask: async (req, res) => {
        try {
            const result = await Task.find();
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },

    editAdmin: async (req, res) => {
        const { id } = req.params;
        const { assignment, status } = req.body;
        try {
            await Task.findByIdAndUpdate(id, {
                assignment,
                status,
            });

            res.send({
                message: 'task Succesfully updated',
            });
        } catch (error) {
            res.send(error);
            console.log(error);
        }
    },
    editUser: async (req, res) => {
        const { id } = req.params;
        const { status } = req.body;
        try {
            await Task.findByIdAndUpdate(id, {
                status,
            });
            const all = await Task.find();

            res.send({
                message: 'Updated',
                result: all,
            });
        } catch (error) {
            res.send(error);
            console.log(error);
        }
    },
};
