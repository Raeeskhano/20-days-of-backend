const express = require("express");
const { registerHome } = require("../controllers/storeController");
const storeRouter = express.Router();

const homesController = require("../controllers/storeController");

storeRouter.get("/", homesController.getHomes);
storeRouter.get("/bookings", homesController.getBookings);
storeRouter.get("/index", homesController.getindex);
storeRouter.get("/favorite", homesController.getFavoriteList);

storeRouter.get("/home/:homeId", homesController.getHomeDetails);

module.exports = storeRouter;
