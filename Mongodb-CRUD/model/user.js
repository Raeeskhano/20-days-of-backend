const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/testapp");

//Schema is a blueprint that defines the structure of a document.
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  image: String,
});

module.exports = mongoose.model("user", userSchema);
