var mongoose = require('mongoose');

userSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true
    },
    email : {
        type : String,
        trim : true
    }
})

var Users = new mongoose.model('users', userSchema)
module.exports = Users