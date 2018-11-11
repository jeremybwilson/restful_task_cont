const TaskController = require('../../controllers/tasks.controller');
const router = require('express').Router();

module.exports = router
    //routes and controllers
    router.get('/', TaskController.index);

    // create task route
    router.post('/', TaskController.create);

    // show a task route
    router.get('/:task_id', TaskController.show);

    // update a task route
    router.put('/:task_id', TaskController.update);

    // delete user route
    router.delete('/:task_id', TaskController.destroy);

    // catch 404 and forward to error handler
    router.use((request, response, next) => {
        const err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
    
    // error handler
    router.use((err, request, response, next) => {
        // set locals, only providing error in development
        response.locals.message = err.message;
        response.locals.error = request.router.get('env') === 'development' ? err : {};
        response.status(err.status || 500);
        // render the error page
        // response.render('error', {title: 'Error page'});
    });