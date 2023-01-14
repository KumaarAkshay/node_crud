const Student = require("../models/students")


exports.allStudent = async(req,res)=>{
    try{
      console.log("hello");
      const allStudent = await Student.find()
      res.status(201).send(allStudent);
    }catch(e){
      res.status(400).send(e);
    }
  }

exports.oneStudent = async(req,res)=>{
    try{
        const address = req.params.name;
        console.log(address);

      const oneStudent = await Student.find({address});
      console.log(oneStudent);
      if(!oneStudent){
        res.status(400).send("not found");
      }else{
        res.status(201).send(oneStudent);
      }
      
    }catch(e){
      res.status(400).send(e);
    }
  }

exports.addStudent = async(req,res)=>{

    try{
      const student = new Student(req.body)
      console.log(student);
      const createUser = await student.save()
        res.status(201).send(createUser);
    }catch(e){
      res.status(400).send(e);
    }
  }

exports.deleteStudent = async(req,res)=>{
    try{ const name = req.params;
       console.log(name);
      const deleteStudent = await Student.findOneAndDelete(name);
      if(!deleteStudent){
        res.status(400).send("User not found");
      }
      else{
        res.status(201).send(deleteStudent);
      }
    }catch(e){ 
      res.status(400).send(e);
    }
  }

exports.updateStudent = async(req,res)=>{
    try{ const names = req.params;
       console.log(names);
      const address = req.body;
      console.log(address);
      const updateStudent = await Student.findOneAndUpdate(names,address,{new :true});
      if(!updateStudent){
        res.status(400).send("user not found");
      }else{
        res.status(400).send(updateStudent);
      }
  
    }catch(e){
      res.status(400).send(e);
    }
  }