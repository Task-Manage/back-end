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
    getAllTask: async (req,res) => {
        try {
            const result = await Task.find();
            res.send(result)
        } catch (error) {
            res.send(error)
        }
    },

    editAdmin: async (req, res) => {
        const { id } = req.params;
        const { assignment, assignee, status } = req.body;
        try {
            await Task.findByIdAndUpdate(id, {
                assignment,
                assignee,
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
