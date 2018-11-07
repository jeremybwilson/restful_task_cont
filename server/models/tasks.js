// NOT IMPLEMENTED
const mongoose = require('mongoose');
const { Schema } = mongoose;

// schema
const taskSchema = new Schema ({
    toDo: {
        type: String,
        required: [true, 'Task description is required'],
        trim: true,
    },
}, {timestamps: true});

module.exports = mongoose.model('Task', taskSchema);