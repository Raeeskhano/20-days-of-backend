const express = require("express");
const path = require("path");

const hostRouter = express.Router();
const registerHome = [];

// GET /add-home route
hostRouter.get("/add-home", (req, res, next) => {
  console.log(req.url, req.method);
  res.sendFile(path.join(__dirname, "..", "views", "RegisterHome.html"));
});

// POST /add-home route
hostRouter.post("/add-home", (req, res, next) => {
  console.log(
    "home registration successful for:",
    req.body,
  );
  registerHome.push({ houseName: req.body });
  res.sendFile(path.join(__dirname, "..", "views", "homeAdded.html"));
});

module.exports = {
  hostRouter,
  registerHome,
};
