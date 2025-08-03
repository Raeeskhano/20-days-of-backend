const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  console.log(req.url, req.method);
  res.render("/host/edit-home", {
    pagetitle: "Register Home",
    currentPage: "add-Home",
    editing: false,
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("home not found for edit");
      res.redirect("/host/host-addhome-list");
    }
  });

  console.log(homeId, editing, home);
  res.render("/host/edit-home", {
    home: home,
    pagetitle: "edit your Home",
    currentPage: "host-Home",
    editing: editing,
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
  res.render("/host/homeAdded", {
    pagetitle: "Home",
    currentPage: "homeAdded",
  });
};
