const Home = require("../models/home");

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registerHome) => {
    res.render("store/addHome-list", {
      registerHome: registerHome,
      pagetitle: "airbnb Home",
      currentPage: "addHome",
    });
  });
};

exports.getBookings = (req, res, next) => {
  Home.fetchAll((registerHome) =>
    res.render("store/bookings", {
      registerHome: registerHome,
      pagetitle: "My bookings",
      currentPage: "bookings",
    })
  );
};

exports.getFavoriteList = (req, res, next) => {
  Home.fetchAll((registerHome) =>
    res.render("store/favorite", {
      registerHome: registerHome,
      pagetitle: "My Favorites",
      currentPage: "favorites",
    })
  );
};

exports.getindex = (req, res, next) => {
  Home.fetchAll((registerHome) =>
    res.render("store/index", {
      registerHome: registerHome,
      pagetitle: "airbnb Home",
      currentPage: "index",
    })
  );
};

exports.getAddHomeslist = (req, res, next) => {
  Home.fetchAll((registerHome) =>
    res.render("store/addHome-list", {
      registerHome: registerHome,
      pagetitle: "Home List",
      currentPage: "Home",
    })
  );
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("home not found");
      res.redirect("/homes");
    } else {
      console.log("Home details found:", home);
      res.render("store/home-detail", {
        home: home,
        pagetitle: "Home detail",
        currentPage: "Home",
      });
    }
  });
};
