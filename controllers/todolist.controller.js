const db = require('../database')
class TodolistController {
    async createTask(req, res){
        const {task, difficult, user_id} = req.body;
        const newTask = await db.query('INSERT INTO todolist (task, difficult, user_id) VALUES ($1, $2, $3) RETURNING *', [task, difficult, user_id]);
        res.json(newTask.rows[0]);
    }
    async getTaskByUser(req, res) {
        const id = req.query.id;
        const task = await db.query('SELECT * FROM todolist WHERE user_id = $1', [id]);
        res.json(task.rows);
    }
    async deleteTask(req, res){
        const id = req.params.id;
        const task_id = await db.query('DELETE FROM todolist WHERE id = $1', [id]);
        res.json(task_id.rows[0]);
    }
}
module.exports = new TodolistController();