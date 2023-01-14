const express = require('express');
const morgan = require('morgan');
// const { getMaxListeners } = require('./models/students');
const dbconnection = require("./db/conn")
const Student = require("./models/students")
const studentRoutes = require('./routes/studentRoutes');
const authRoutes = require('./routes/authRoutes');

var session = require('express-session')


const app = express()

// app.use(express.static('public'));

// app.set('view engine','ejs');

const port = process.env.PORT || 3000;
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',(req, res)=> {
  // res.send('hello world');
  res.redirect('/student');
})

app.post('/test',(req,res)=>{
  console.log(req.body);

})

//register Login
app.use('/user', authRoutes);

// student routes
app.use('/student', studentRoutes);



app.listen(port,()=>{
    console.log(`Connected to port ${port}`);

})