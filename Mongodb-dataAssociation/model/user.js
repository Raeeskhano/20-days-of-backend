const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/dataAssociation");

const userSchema = mongoose.Schema({
  username: String,
  age: Number,
  email: String,
  post: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
});

module.exports = mongoose.model("user", userSchema);
