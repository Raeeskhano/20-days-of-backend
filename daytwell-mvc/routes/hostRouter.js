const express = require("express");
const path = require("path");

const hostController = require("../controllers/hostController");

const hostRouter = express.Router();

// GET /add-home route
hostRouter.get("/add-home", hostController.getAddHome);

// POST /add-home route
hostRouter.post("/add-home", hostController.postAddHome);
hostRouter.get("/host-addHome-list", hostController.getHostHomes);

module.exports = hostRouter;
