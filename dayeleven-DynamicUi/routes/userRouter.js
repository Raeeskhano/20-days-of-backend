const express = require("express");
const userrouter = express.Router();
const path = require("path");
const { registerHome } = require("./hostRouter");

userrouter.get("/", (req, res, next) => {
  console.log(registerHome);
  res.render("addHome", {
    registerHome: registerHome,
    pagetitle: "airbnb Home",
  });
});

module.exports = userrouter;
