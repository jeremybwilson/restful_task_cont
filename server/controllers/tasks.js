const mongoose = require('mongoose');
const Task = mongoose.model('Task');
// const Task = require('mongoose').model('Task');

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
    },
    show(request, response) {
        Task.findOne({ task: request.params.task })
        .then(tasks_db => {
            const tasks = tasks_db;
            response.json(tasks);
        })
        .catch(error => {
            response.json({ message: "Error", error: error })
        })
    },
    create(request, response) {
        Task.create({task: request.params.task})
        .then(
            response.redirect('/')
        )
        .catch(error => {
            response.json({ message: "Error", error: error });
        })
    },
    destroy(request, response) {
        Task.deleteOne({task: request.params.task})
        .then(
            response.redirect('/')
        )
        .catch(error => {
            response.json({message: "Error", error: error});
        })
    }
}