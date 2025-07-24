const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  console.log(req.url, req.method);
  res.render("host/RegisterHome", {
    pagetitle: "Register Home",
    currentPage: "add-Home",
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registerHome) => {
    res.render("host/host-addHome-list", {
      registerHome: registerHome,
      pagetitle: "host homes list",
      currentPage: "host-homes",
    });
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, image } = req.body;
  const home = new Home(houseName, price, location, rating, image);
  home.save();
  res.render("host/homeAdded", {
    pagetitle: "Home",
    currentPage: "homeAdded",
  });
};
