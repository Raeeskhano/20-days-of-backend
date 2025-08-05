const fs = require("fs");
const path = require("path");

const favoriteDataPath = path.join(__dirname, "../", "data", "favorite.json");

module.exports = class Favorite {
  static addTofavorite(id, callback) {
    Favorite.getFavorites((Favorite) => {
      if (Favorite.includes(id)) {
        console.log("home is already marked as favorite");
      } else {
        Favorite.push(id);
        fs.writeFile(favoriteDataPath, JSON.stringify(Favorite), callback);
      }
    });
  }

  static getFavorites(callback) {
    fs.readFile(favoriteDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
