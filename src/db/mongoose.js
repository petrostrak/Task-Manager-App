const mongoose = require('mongoose')
const validator = require('validator')
// https://mongoosejs.com/docs/validation.html#built-in-validators

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})



// const task = new Task({
//     description: 'A morning exercise'
// }).save().then(() => {
//     console.log(task);
// }).catch((e) => {
//     console.log('Error!', e)
// })



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