const mongoose = require("mongoose")
//const validator = require("validator")
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
    
    email : {
        type : String,
        requred : true,
        unique : [true, "Email id already present"],
        // validate(value){
        //     if(validator.isEmail(value)){
        //         throw new Error("Invaild Email")
        //     }
        // }
    },

    phone : {
        type : Number,
        // min : 10,
        // max : 10,
        requred : true,
        unique : true
    },
    password : {
        type : String,
        requred : true,

    }
})

const Client = mongoose.model('Client',clientSchema);


module.exports = Client;