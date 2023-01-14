const Client = require("../models/clients")


exports.register  = async(req,res)=>{

    try{

		if(req.body.cpassword == req.body.password){

		const client = new Client();
		client.firstname = req.body.firstname;
		client.lastname = req.body.lastname;
		client.email = req.body.email;
		client.phone = req.body.phone;
		client.password = req.body.password;

		console.log(client);
		const createUser = await client.save()
		res.status(201).send(createUser);
		}
		else{
			res.status(201).send("Password and confirm passworn not match");
		}

	  }catch(e){
		res.status(400).send(e);
	  }
}


exports.login  = async(req,res)=>{
	try{
		var data = await Client.findOne({email: req.body.email });
		
	}catch(e){
		res.status(400).send(e);
	}
	

}