const mongoose = require("mongoose")
const validator = require("validator")
// const Schema = mongoose.Schema;


const clientSchema = new mongoose.Schema({
    // const studentSchema = new Schema({
    firstname : {
        type : String,
        requred :true,
        minlength : 3
    },

    lastname : {
        type : String,
        requred :true,
        minlength : 3
    },

    username : {
        type : String,
        requred :true,
        minlength : 3,
        unique : [true, "username must be unique present"]
    },
    
    email : {
        type : String,
        requred : true,
        unique : [true, "Email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invaild Email")
            }
        }
    },


    password : {
        type : String,
        requred : true,

    }
})

const Client = mongoose.model('Client',clientSchema);


module.exports = Client;