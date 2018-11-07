//NOT IMPLEMENTED

const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {
    index(request, response) {
        Task.find({})
        .then(tasks_db => {
            const tasks = tasks_db;
            response.json(tasks);
        })
        .catch(error => {
            response.json({message: "Error", error:error});
        })
    }
}