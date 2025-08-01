const express = require("express");
const { registerHome } = require("../controllers/storeController");
const storeRouter = express.Router();

const storeController = require("../controllers/storeController");

storeRouter.get("/", storeController.getHomes);
storeRouter.get("/bookings", storeController.getBookings);
storeRouter.get("/index", storeController.getindex);
storeRouter.get("/favorite", storeController.getFavoriteList);

storeRouter.get("/home/:homeId", storeController.getHomeDetails);
storeRouter.post("/favorite", storeController.postAddTofavorite);

module.exports = storeRouter;
