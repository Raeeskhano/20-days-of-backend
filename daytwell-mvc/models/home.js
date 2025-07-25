const { error } = require("console");
const fs = require("fs");
const path = require("path");

const homedataPath = path.join(__dirname, "../", "data", "homes.json");

module.exports = class Home {
  constructor(houseName, price, location, rating, image) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.image = image;
  }

  save() {
    this.id = Math.random().toString();
    Home.fetchAll((registerHome) => {
      registerHome.push(this);
      fs.writeFile(homedataPath, JSON.stringify(registerHome), (error) => {
        console.log("file writing concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(homedataPath, (err, data) => {
      console.log("file read:", err, data);
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static findById(homeId, callback) {
    this.fetchAll((homes) => {
      const homeFound = homes.find((home) => home.id === homeId);
      callback(homeFound ? homeFound : "Home not found");
    });
  }
};
