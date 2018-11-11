// const Task = mongoose.model('Task');
const Task = require('mongoose').model('Task');

module.exports = {
    index(request, response) {
        console.log(`we are inside the index route`);
        Task.find({})
        .then(tasks => {
            console.log(`Successfully displaying the index route`);
            // const tasks = tasks_db;
            response.json({ message: "Success", tasks });
        })
        .catch(error => {
            console.log(`something went wrong with the index route`);
            response.json({ message: "Error", error: error});
        })
    },
    show(request, response) {
        console.log(`inside the show individual task route`); 
        // Task.findOne({ task: request.params.task })
        Task.findById(request.params.task_id)
        .then(task => {
            // const task = tasks_db;
            console.log(`Successfully found a task`);
            response.json({message: "Success", task});
        })
        .catch(error => {
            console.log(`something went wrong with show request`);
            response.json({ message: "Error", error: error })
        })
    },
    create(request, response) {
        console.log(`inside the create task controller`); 
        Task.create(request.body)
            .then(task => {
                console.log('created task', task);
                response.redirect('/');
            })
            .catch(error => {
                console.log('got an error', error);
                response.json({ message: "Error", error: error });
            })
    },
    update(request, response) {
        console.log(`controller got a request to update`);
        Task.findOneAndUpdate(request.params.task_id, request.body)
            .then(task => {
                console.log(`successfully updated a task`)
                response.json({ message: "Success", task});
                // response.redirect('/')
            })
            .catch(error => {
                console.log(`something went wrong with the update`);
                response.json({ message: "Error", error: error });
            })
    },
    destroy(request, response) {
        console.log('received a request to delete a task id', request.params.task_id)
        // Task.deleteOne({task: request.params.task})
        Task.findByIdAndRemove(request.params.task_id)
            .then(task => {
                console.log(`successfully deleted a task`);
                response.json({ message: "Success", task});
                // response.redirect('/')
            }
            )
            .catch(error => {
                console.log(`something went wrong with the delete request`);
                response.json({message: "Error", error: error});
            })
    }
};