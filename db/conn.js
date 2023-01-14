const mongoose = require("mongoose")

// Connection for mongose on system
// const dbURI = "mongodb://127.0.0.1:27017/students-api";

// Connection for mongodb atlas online
const dbURI = `mongodb+srv://akshay-db:aks123456@cluster0.xxbhhvz.mongodb.net/student-db-api?retryWrites=true&w=majority`;


mongoose.connect(dbURI,
{ useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> {
    console.log("connected to db");})
.catch((err) =>{

   console.log(err);});
