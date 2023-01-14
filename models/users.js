const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    fullname : {
        type : String,
        requred :true,
        minlength : 3
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