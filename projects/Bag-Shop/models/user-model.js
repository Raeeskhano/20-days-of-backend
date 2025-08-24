const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Bag-Shop");

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    trim: true,
    minlength: 3,
  },
  email: String,
  password: String,
  cart: {
    type: Array,
    default: [],
  },
  isadmin: Boolean,
  orders: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("users", userSchema);
