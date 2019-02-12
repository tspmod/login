var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/user-db');

mongoose.Promise = Promise;

var userSchema = new mongoose.Schema({
    email: {
        type: String

    },
    password: {
        type: String

    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var User = mongoose.model('User', userSchema);

module.exports = User;
