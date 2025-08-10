const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`); //used to connect

//Schema is a method which take object and used to creates different Schemas.
const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
});

//model is used to create Collection to perform CRUD operation on them, model takes two things collection name and schema from which we are going to create collection
module.exports = mongoose.model("user", userSchema);
