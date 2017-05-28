const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// }); all delete data

// Todo.findOneAndRemove();
// Todo.findByIdAndRemove();

// Todo.findOneAndRemove({_id: '592afd3ae4112df9d5abecc6'}).then((todo) => {
//     console.log(todo);
// });

Todo.findByIdAndRemove('592afd3ae4112df9d5abecc6').then((todo) => {
    console.log(todo);
});