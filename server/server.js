var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: 'Cook diner'
// });
//
// newTodo.save().then((doc)=> {
//     console.log('Save todo', doc);
// }, (e) => {
//     console.log('Unable to save todo')
// });

// var otherTodo = new Todo({
//     text: 'Feed the cat',
//     completed: true,
//     completedAt: 123
// });

// otherTodo.save().then((doc)=> {
//     console.log('Save todo', JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save todo')
// });;


// User
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var user = new User({
    email: 'maksalizm@gmail.com'
});

user.save().then((doc) => {
    console.log('Save user', JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to save user');
});