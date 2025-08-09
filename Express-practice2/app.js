const express = require("express");
const path = require("path");

const app = express();

app.use(express.json()); //it makes the json date readable on server
app.use(express.urlencoded({ extended: true })); // it makes the urlencoded data readable on server
app.use(express.static(path.join(__dirname, "public"))); // express.static--> used for static files like css, images etc, and path.join joins the current path by (__dirname, "public") with public folder.

app.set("view engine", "ejs"); // it is used to set ejs file for rendering

app.get("/", (req, res) => {
  res.render("index"); // rendering ejs file in views folder
});

//dynamic routes, (:) make the route dynamic and req.params = : and
app.get("/profile/:username", (req, res) => {
  res.send(`Welcome ${req.params.username}`); // rendering ejs file in views folder
});

app.get("/author/:username/:age", (req, res) => {
  res.send(`Welcome ${req.params.username} of age ${req.params.age}`); // rendering ejs file in views folder
});

app.listen(3000, () => {
  console.log("server is running on");
}); 
