//NOT IMPLEMENTED

const TaskController = require('../controllers/tasks');

module.exports = function(app) {
    app.get('/', TaskController.index);
}