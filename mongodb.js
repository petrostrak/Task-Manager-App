// CRUD

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const database = 'task-manager'

const id = new ObjectID()
console.log(id.id.length);
console.log(id.toHexString().length);
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(database)

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

    db.collection('users').insertOne({
        _id: id,
        name: 'Gunther',
        age: 65
    }, (error, result) => {
        if(error) {
            return console.log('Unable to insert user');
        }

        console.log(result.ops);
    })
})