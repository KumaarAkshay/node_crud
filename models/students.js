const mongoose = require("mongoose")
//const validator = require("validator")
// const Schema = mongoose.Schema;


const studentSchema = new mongoose.Schema({
    // const studentSchema = new Schema({
    name : {
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
    address : {
        type : String,
        requred : true
    }
})

const Student = mongoose.model('Student',studentSchema);


module.exports = Student;