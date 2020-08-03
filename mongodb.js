// CRUD

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const database = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(database)

    // DELETE/home/petros/.mongodb/bin/mongod --dbpath=/home/petros/.mongodb-data
    db.collection('tasks').deleteOne({
        description: 'Play video games'
    }).then((result) => {
        console.log(result.deletedCount);
    }).catch((error) => {
        console.log(error);
    })

    // db.collection('users').deleteMany({
    //     agr: 34
    // }).then((result) => {
    //     console.log(result.deletedCount);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // // UPDATE
    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5f26f3cb2d112e6bc28f6af5")
    // }, {
    //     $inc: {
    //         age: -2
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((erroe) => {
    //     console.log(error);
    // })

    // // READ
    // db.collection('tasks').findOne({_id: new ObjectID("5f26f6d11805806f9ede7f7e")}, (error, task) => {
    //     if(error) {
    //         return console.log('Unable to fetch');
    //     }
    //     console.log(task);
    // })

    // db.collection('tasks').find({ completed: false}).count((error, count) => {
    //     console.log(count);
    // })

    // db.collection('users').find({age: 34}).toArray((error, users) => {
    //     console.log(users);
    // })

    // db.collection('users').find({age: 34}).count((error, count) => {
    //     console.log(count);
    // })

    // db.collection('users').findOne({ _id: new ObjectID("5f26fc9d83b757733a43970a") }, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    // })

    // // CREATE
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Study',
    //         completed: true
    //     }, {
    //         description: 'Sleep',
    //         completed: false
    //     }, {
    //         description: 'Play video games',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert collection');
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Maggie', 
    //         age: 36
    //     },{
    //         name: 'Petros', 
    //         age: 34
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert documents!');
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Gunther',
    //     age: 65
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    // })
})