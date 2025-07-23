const express = require("express");
const path = require("path");

const hostRouter = express.Router();
const registerHome = [];

// GET /add-home route
hostRouter.get("/add-home", (req, res, next) => {
  console.log(req.url, req.method);
  res.render("RegisterHome", {
    registerHome: registerHome,
    pagetitle: "Register Home",
    currentPage: "add-Home",
  });
});

// POST /add-home route
hostRouter.post("/add-home", (req, res, next) => {
  console.log("home registration successful for:", req.body);
  registerHome.push({ houseName: req.body });
  res.render("homeAdded", {
    registerHome: registerHome,
    pagetitle: "Home",
    currentPage: "homeAdded",
  });
});

module.exports = {
  hostRouter,
  registerHome,
};
