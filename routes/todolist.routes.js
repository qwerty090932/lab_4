const Router = require('express');
const router = new Router();
const todolistController = require('../controllers/todolist.controller')

router.post('/todolist', todolistController.createTask);
router.get('/todolist', todolistController.getTaskByUser);
router.delete('/todolist/:id', todolistController.deleteTask);

module.exports = router;