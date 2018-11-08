// NOT IMPLEMENTED
const mongoose = require('mongoose');
const { Schema } = mongoose;

// schema
const TaskSchema = new Schema ({
    task: {
        type: String,
        required: [true, 'Task description is required'],
        trim: true,
    },
}, {timestamps: true});


// const TaskSchema = new Schema({
//     title: {
//         type: String,
//         required: [true, "Please give your task a title"],
//         trim: true,
//     },
//     description: {
//         type: String,
//         default: "",
//         required: [true, 'Task description is required'],
//         trim: true,
//     },
//     completed: {
//         type: Boolean,
//         default: false,
//         required: true,
//     },
// }, {timestamps: true});

mongoose.model('Task', TaskSchema);
const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;