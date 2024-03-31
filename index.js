const express = require('express');
const userRouter = require('./routes/user.routes');
const todolistRouter = require('./routes/todolist.routes');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json())
app.use('/api', userRouter);
app.use('/api',todolistRouter);

app.listen(PORT, ()=>console.log("tot"));