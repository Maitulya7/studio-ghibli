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

    favorites: {
        type: [String], // Array of strings for item identifiers
        default: [], // Initialize with an empty array
    },

}) 


module.exports = mongoose.model('User' , userSchema)