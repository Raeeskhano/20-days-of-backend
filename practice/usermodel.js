const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mongopractice");

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  age: Number,
  email: String,
});

module.exports = mongoose.model("user", userSchema);
