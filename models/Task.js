const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tasksSchema = Schema({
    assignment: {
        type: String,
    },
    status: {
        type: String,
        required: true,
        default: 'start',
    },
    assignee: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Task = mongoose.model(`tasks`, tasksSchema);

module.exports = Task;
