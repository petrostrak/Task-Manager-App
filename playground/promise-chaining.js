require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

Task.findByIdAndRemove('5f27e13ea43d1f4134f22f8f').then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false})
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})

// User.findByIdAndUpdate('5f27e0fda43d1f4134f22f8e', { age: 1}).then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1})
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })


// const add = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a + b)
//         }, 2000)
//     })
// }

// add(1, 1).then((sum) => {
//     console.log(sum);
//     return add(sum, 4)
// }).then((sum2) => {
//     console.log(sum2);
// }).catch((e) => {
//     console.log(e);
// })