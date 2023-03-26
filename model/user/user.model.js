const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  organisation: {
    type: String,
  },
  employeecount: {
    type: String,
  },
});
const User = mongoose.model("User", userModel);
module.exports = User;
