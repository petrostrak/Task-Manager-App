require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5f27c557eba9911ffb788948').then((task) => {
//     console.log(task);
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskById = async (id) => {
    const deleteTask = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return deleteTask
}

deleteTaskById('5f27c557eba9911ffb788948').then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})