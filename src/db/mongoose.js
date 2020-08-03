const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const Task = mongoose.model('Task', {
    description: {
        type: String
    }, 
    completed: {
        type: Boolean 
    }
})

const task = new Task({
    description: 'A morning masturbation', 
    completed: 'nop'
}).save().then(() => {
    console.log(task);
}).catch((e) => {
    console.log('Error!', e)
})

// const User = mongoose.model('User', {
//     name: {
//         type: String
//     }, 
//     age: {
//         type: Number
//     }
// })

// const me = new User({
//     name: 'Petros',
//     age: 34
// }).save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log('Error',error);
// })