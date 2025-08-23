const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Data");

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  post: [{ type: mongoose.Schema.Types.ObjectId, ref: "posts" }],
});

module.exports = mongoose.model("users", userSchema);
