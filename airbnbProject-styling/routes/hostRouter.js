const express = require("express");
const hostrouter = express.Router();
const path = require("path");

hostrouter.get("/add-home", (req, res, next) => {
  console.log(req.url, req.method);
  res.sendFile(path.join(__dirname, "../", "views", "RegisterHome.html"));
});

hostrouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname, "../", "views", "homeAdded.html"));
});

module.exports = hostrouter;
