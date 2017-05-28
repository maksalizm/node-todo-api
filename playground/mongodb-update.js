const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //         _id: new ObjectID("592ab5dde4112df9d5abd8dc")
    //     },
    //     {
    //         $set: {
    //             completed: true
    //         }
    //     },
    //     {
    //         returnOriginal: false
    //     }).then((result) => {
    //     console.log(result)
    // });

    db.collection('Users').findOneAndUpdate({
            name: 'maksalizm'
        },
        {
            $set: {
                name: 'maksa'
            },
            $inc: {
                age: 1
            }
        },
        {
            returnOriginal: false
        }).then((result) => {
        console.log(result)
    });

    db.close();
});