const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const { response } = require('express')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('The website is under maintenance, please try again later')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})

const Task = require('./models/task')
const User = require('./models/user')
const main = async () => {
    // const task = await Task.findById('5f2a6abca804ac17442f43fd')
    // await task.populate('author').execPopulate()
    // console.log(task.author);

    const user = await User.findById('5f2a69e452ffbc1549b2c4c5')
    await user.populate('tasks').execPopulate() 
    console.log(user.tasks);
}

main()