const db = require('../database')
class UserController {
    async createUser(req, res){
        const {name, age} = req.body;
        const newPerson = await db.query('INSERT INTO person (name, age) VALUES ($1, $2) RETURNING *', [name, age]);
        res.json(newPerson.rows[0])
    }
    async getUsers(req, res){
        const users = await db.query('SELECT * FROM person');
        res.json(users);
    }
    async getOneUser(req, res){
        const id = req.params.id;
        const user_id = await db.query('SELECT * FROM person WHERE id = $1', [id]);
        res.json(user_id.rows[0]);
    }
    async updateUser(req, res){
        const {id, name, age} = req.body;
        const user = await db.query('UPDATE person SET name = $1, age = $2 WHERE id = $3 RETURNING *', [name, age, id]);
        res.json(user.rows[0]);
    }
    async deleteUser(req, res){
        const id = req.params.id;
        const user_id = await db.query('DELETE FROM person WHERE id = $1', [id]);
        res.json(user_id.rows[0]);
    }
}
module.exports = new UserController();