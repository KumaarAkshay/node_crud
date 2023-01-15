const Account = require("../models/accounts");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    if (req.body.cpassword == req.body.password) {
      console.log(req.body);
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const account = new Account();
      account.username = req.body.username;
      account.password = hashedPassword;
      const createUser = await account.save();
      res.status(201).send(createUser);
    } else {
      res.status(201).send("Password and confirm passworn not match");
    }
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.login = async (req, res) => {
  try {
    var data = await Account.findOne({ username: req.body.username });
    if (data == null) {
      return res.status(400).send("Cannot find user");
    }
    if (await bcrypt.compare(req.body.password, data.password)) {
      res.send("Success");
    } else {
      res.send("Not Allowed");
    }
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.allClient = async (req, res) => {
  try {
    const allStudent = await Account.find();
    res.status(201).send(allStudent);
  } catch (e) {
    res.status(400).send(e);
  }
};
