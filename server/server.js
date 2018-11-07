const express = require('express'),
    session = require('express-session'),
    flash = require('express-flash'),
    parser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),

    port = process.env.PORT || 8000,
    // invoke express and store the result in the variable app
    app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(flash());
app.use(session({
    secret:'superSekretKitteh',
    resave: false,
    saveUninitialized: false,
    cookie: {secure: false, maxAge: 60000}
}));

//connect to DB
require('./server/config/database');

//schema
const { Schema } = mongoose;
const TaskSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please give your task a title"],
        trim: true,
    },
    description: {
        type: String,
        default: "",
        required: [true, 'Task description is required'],
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
        required: true,
    },
}, {timestamps: true});
const Task = mongoose.model('Task', TaskSchema);

//routes
app.get('/', (request, response) => {
    response.redirect('/tasks');
});

app.get('/tasks', (request, response) => {
    Task.find({})
        .then(tasks_db => {
            const tasks = tasks_db;
            response.json(tasks);
        })
        .catch(console.log)
});

app.post('/tasks', (request, response) => {
    //new task is created
    console.log(request.body);
    const task = new Task(request.body);
    task.save()
        .then(response.redirect('/'))
        .catch(console.log)
});

app.get('/tasks/:_id', (request, response) => {
    //a task is found by id
    console.log(request.params._id);
    Task.findById(request.params._id)
        .then(task_db => {
            const task = task_db;
            response.json(task);
        })
        .catch(console.log)
});

app.put('/tasks/:_id', (request, response) => {
    //a task is updated
    console.log(request.params._id, request.body);
    Task.findByIdAndUpdate(request.params._id, request.body)
        .then(response.redirect('/'))
        .catch(console.log)
}); 

app.delete('/tasks/:_id', (request, response) => {
    //a task is deleted 
    console.log(request.params._id, request.body)
    Task.findByIdAndDelete(request.params._id)
        .then(response.redirect('/'))
        .catch(console.log)
});

// port
app.listen(port, () => console.log(`Express server listening on port ${port} for Restful Task API`));    // ES6 way