const express = require('express')
const router = new express.Router()
const Task = require('../models/task')
const auth = require('../middleware/auth')

// GET ALL TASKS
// GET /tasks?completed=true
router.get('/tasks', auth, async (req, res) => {
    const match = {}

    if(req.query.completed){
        match.completed = req.query.completed === 'true'
    }

    try {
        // const tasks = await Task.find({ author: req.user._id })
        await req.user.populate({ 
            path: 'tasks',
            match
        }).execPopulate()
        res.status(200).send(req.user.tasks)
    } catch (e) {
        res.status(500).send(e)
    }
})

// GET ONE TASK
router.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findOne({ _id, author: req.user._id })

        if (!task) {
            return res.status(404).send()
        }
        res.status(200).send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})



router.post('/tasks', auth, async (req, res) => {
    // const task = new Task(req.body)
    const task = new Task({
        ...req.body,
        author: req.user._id
    })

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

// PATCH for resource updating


// UPDATE task
router.patch('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body) // converting from an object, to an array of properties
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(404).send({ error: 'Invalid Updates' })
    }

    try {
        // const task = await Task.findById(req.params.id)
        const task = await Task.findOne({ _id: req.params.id, author: req.user._id })

        //const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new:true, runValidators: true })

        if (!task) {
            return res.status(404).send()
        }
        updates.forEach((update) => task[update] = req.body[update])
        await task.save()
        res.status(200).send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

// DELETE for resourse deletion


// DELETE task
router.delete('/tasks/:id', auth, async (req, res) => {
    try {
        // const task = await Task.findByIdAndDelete(req.params.id)
        const task = await Task.findOneAndDelete({ _id: req.params.id, author: req.user._id })

        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router