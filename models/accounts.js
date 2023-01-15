const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  username: {
    type: String,
    requred: true,
    minlength: 3,
    unique: true,
  },

  password: {
    type: String,
    requred: true,
  },
});

const Account = mongoose.model("Account", accountSchema);
module.exports = Account;
