const express = require("express");
const userrouter = express.Router();
const path = require("path");

userrouter.get("/", (req, res, next) => {
  console.log(req.url, req.method);
  res.sendFile(path.join(__dirname, "../", "views", "addHome.html"));
});

module.exports = userrouter;
