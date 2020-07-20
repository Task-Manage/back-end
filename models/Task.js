const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = mongoose.Schema({
    assignment: {
        type: String,
    },
    status: {
        type: String,
        required: true,
        default: 'start',
    },
    inCharge: {
        type: String,
        required: true,
    },
    ID: {
        type: Schema.Types.ObjectId,
        ref: 'users',
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

const Task = mongoose.model(`task`, taskSchema);

module.exports = Task;
