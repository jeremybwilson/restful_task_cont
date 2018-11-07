const mongoose = require('mongoose'),
        fs = require('fs'),
        path = require('path'),
        reg = new RegExp('\\.js$', 'i');
        
//path to models
// const models_path = path.resolve('server/models');

//connect to DB
mongoose.connect('mongodb://localhost:27017/restful_task_api', { useNewUrlParser:true });
mongoose.connection.on('connected', () => console.log(`MongoDB connected to Tasks!`));

// fs.readdirSync(models_path).forEach(file => {
//     if (reg.test(file)) {
//         require(path.join(models_path, file));
//     }
// });