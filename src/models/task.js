const mongoose = require('mongoose')
// https://mongoosejs.com/docs/validation.html#built-in-validators

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    }, 
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = Task