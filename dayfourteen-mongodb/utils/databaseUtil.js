const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const MONGO_URL =
  "mongodb+srv://Raees-khan:mongodbatlas@practice.hzwtuaa.mongodb.net/?retryWrites=true&w=majority&appName=Practice";

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
    .then((client) => {
      callback(client);
      _db = client.db("airbnb");
    })
    .catch((error) => {
      console.log("error while connecting to database", error);
    });
};

const getDb = () => {
  if (!_db) {
    throw new Error("mongodb not connected yet");
  }
  return _db;
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
