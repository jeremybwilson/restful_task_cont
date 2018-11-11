const task_router = require('./task.routes');
// const author_router = require('./author.routes');
const router = require('express').Router();

module.exports = router
  .use('/tasks', task_router);