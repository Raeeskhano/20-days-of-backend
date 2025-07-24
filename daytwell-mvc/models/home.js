const { error } = require("console");
const fs = require("fs");
const path = require("path");

module.exports = class Home {
  constructor(houseName, price, location, rating, image) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.image = image;
  }

  save() {
    Home.fetchAll((registerHome) => {
      registerHome.push(this);
      const homedataPath = path.join(__dirname, "../", "data", "homes.json");
      fs.writeFile(homedataPath, JSON.stringify(registerHome), (error) => {
        console.log("file writing concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    const homedataPath = path.join(__dirname, "../", "data", "homes.json");
    fs.readFile(homedataPath, (err, data) => {
      console.log("file read:", err, data);
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
