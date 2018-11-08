const TaskController = require('../controllers/tasks');

module.exports = function(app) {
    //routes and controllers
    app.get('/tasks', TaskController.index);

    // create user route
    app.get('/tasks/new/:task', TaskController.create);

    // delete user route
    app.get('/tasks/remove/:task', TaskController.destroy);

    // show all users route
    app.get('/tasks/:task', TaskController.show);

    // catch 404 and forward to error handler
    app.use((request, response, next) => {
        const err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
    
    // error handler
    app.use((err, request, response, next) => {
        // set locals, only providing error in development
        response.locals.message = err.message;
        response.locals.error = request.app.get('env') === 'development' ? err : {};
        response.status(err.status || 500);
        // render the error page
        response.render('error', {title: 'Error page'});
    });
}