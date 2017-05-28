var mongoose = require('mongoose');

// User
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

// var user = new User({
//     email: 'maksalizm@gmail.com'
// });
//
// user.save().then((doc) => {
//     console.log('Save user', JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save user');
// });

module.exports = {User};