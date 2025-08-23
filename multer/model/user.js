const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/multerdb");

const userSchema = new mongoose.Schema({
  profilePic: {
    type: String,
    default: "default.png",
  },
});

module.exports = mongoose.model("user", userSchema);
