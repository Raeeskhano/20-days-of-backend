const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/practice");

const userSchema = mongoose.Schema({
  name: String,
  department: String,
  rollno: Number,
  cgpa: Number,
});

module.exports = mongoose.model("user", userSchema);
