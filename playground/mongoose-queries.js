const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var todoId = '592ad20037e2308d7bb631d5';

var userId = '592ac3016c99b389882745ce';

//
// if (!ObjectId.isValid()) {
//     console.log('ID not valid')
// }

//
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo)  {
//         return console.log('Id not found');
//     }
//
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));


User.findById(userId).then((user) => {
    if (!user) {
        return console.log('Id not found');
    }
    // console.log('User By Id', user);
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));