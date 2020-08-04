const express = require('express')
const router = new express.Router()
const Task = require('../models/task')

// GET ALL TASKS
router.get('/tasks', async (req, res) => {
    const tasks = await Task.find({})

    try{
        res.status(200).send(tasks)
    }catch(e){
        res.status(500).send(e)
    }
})

// GET ONE TASK
router.get('/tasks/:id', async (req, res) => {
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



router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try{
        await task.save()
        res.status(201).send(task)
    }catch(e){
        res.status(400).send(e)
    }
})

// PATCH for resource updating


// UPDATE task
router.patch('/tasks/:id', async (req, res) => {
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


// DELETE task
router.delete('/tasks/:id', async (req, res) => {
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

module.exports = router