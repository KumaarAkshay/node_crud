const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    username : {
        type : String,
        requred :true,
        minlength : 3,
        unique : [true, "username must be unique present"]
    },
    
    email : {
        type : String,
        requred : true,
        unique :  true 
    },

    mobile : {
        type : Number,
        requred : true,
        unique : true
    },
    password : {
        type : String,
        requred : true
    }

})

const User = mongoose.model('User',userSchema);
module.exports = User;