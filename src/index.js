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

// PATCH for resource updating
// UPDATE user
app.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({ error: 'Invalid updates!'})
    }

    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if(!user){
            return res.status(404).send()
        }

        res.send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

// UPDATE task
app.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body) // converting from an object, to an array of properties
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(404).send({ error: 'Invalid Updates'})
    }

    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new:true, runValidators: true })

        if(!task){
            return res.status(404).send()
        }

        res.status(200).send(task)
    }catch(e){
        res.status(500).send(e)
    }
})

// DELETE for resourse deletion
// DELETE user 
app.delete('/users/:id', async(req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id)

        if(!user){
            return res.status(404).send()
        }

        res.send(user)
    }catch(e){
        res.status(500).send()
    }
})

// DELETE task
app.delete('/tasks/:id', async (req, res) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id)

        if(!task){
            return res.status(404).send()
        }

        res.send(task)
    }catch(e){
        res.status(500).send()
    }
})

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})