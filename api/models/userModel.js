const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    username:{
        type:String,
        require:[true , "username is require"]
    },

    email:{
        type:String,
        require:[true , "user email is require"]
    },

    password:{
        type:String,
        require:[true , "user password is require"]
    },

}) 


module.exports = mongoose.model('User' , userSchema)