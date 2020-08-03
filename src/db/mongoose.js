const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

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

const task = new Task({
    description: 'A morning exercise'
}).save().then(() => {
    console.log(task);
}).catch((e) => {
    console.log('Error!', e)
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    }, 
    email: {
        type: String, 
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0, 
        validate(value){
            if(value < 0){
                throw new Error('Age must be a positive number')
            }
        }
    }, 
    password: {
        type: String,
        required: true,
        minlength: 7, 
        trim: true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password should not contain the word "password"')
            }
        }
    }
})

// const me = new User({
//     name: 'Maria',
//     age: 65,
//     email: 'maria@gmail.com',
//     password: '123456'
// }).save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log('Error',error);
// })