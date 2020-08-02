// CRUD

const mongodb = require('mongodb')
const { ifError } = require('assert')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const database = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(database)

    db.collection('tasks').insertMany([
        {
            description: 'Study',
            completed: true
        }, {
            description: 'Sleep',
            completed: false
        }, {
            description: 'Play video games',
            completed: true
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert collection');
        }

        console.log(result.ops);
    })

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
    //     name: 'Petros',
    //     age: 34
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    // })
})