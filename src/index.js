const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

// GET for resource reading
// https://mongoosejs.com/docs/queries.html
// GET ALL USERS
app.get('/users', async (req, res) => {
    const users = await User.find({})
    try {
        res.status(200).send(users)
    } catch (e) {
        res.status(500).send(e)
    }
})

// GET ONE USER
app.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).send()
        }

        res.status(200).send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

// GET ALL TASKS
app.get('/tasks', async (req, res) => {
    const tasks = await Task.find({})

    try{
        res.status(200).send(tasks)
    }catch(e){
        res.status(500).send(e)
    }
})

// GET ONE TASK
app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    const task = await Task.findById(_id)
    try{
        if (!task) {
            return res.status(404).send()
        }
        res.status(200).send(task)
    }catch(e){
        res.status(500).send(e)
    }
})

// POST for resource creation
app.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try{
        await task.save()
        res.status(201).send(task)
    }catch(e){
        res.status(400).send(e)
    }
})

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})