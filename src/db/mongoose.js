const mongoose = require('mongoose')
const validator = require('validator')
// https://mongoosejs.com/docs/validation.html#built-in-validators

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
