const express = require("express");
const path = require("path");
const fs = require("fs");

const userModel = require("./usermodel");
const usermodel = require("./usermodel");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public"))); //this actually tells that search the static files on this path
app.set("view engine", "ejs");

app.use((req, res, next) => {
  console.log("first middleware");
  next();
});

app.get("/", (req, res) => {
  fs.readdir("./files", (err, files) => {
    res.render("home", { files: files });
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/page", (req, res) => {
  res.send("hello page");
  console.log(req.url, req.method);
});

app.get("/profile/:username", (req, res) => {
  res.send(req.params.username);
});

app.get("/file/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, filedata) => {
    res.render("show", { filename: req.params.filename, filedata });
  });
});

app.post("/create1", (req, res) => {
  fs.writeFile(`./files/${req.body.title}`, req.body.details, (err) => {
    res.redirect("/");
  });
});

app.get("/create", async (req, res) => {
  const createdUser = await userModel.create({
    name: "Raees",
    username: "Raeeskhano",
    age: 24,
    email: "rk7523505@gmail.com",
  });
  res.send(createdUser);
});

app.get("/read", async (req, res) => {
  const users = await userModel.find({ username: "Raeeskhano" });
  res.send(users);
});

app.get("/update", async (req, res) => {
  const updatedUser = await userModel.findOneAndUpdate(
    { username: "Raeeskhano" },
    { username: "raeeskhan" }
  );
  res.send(updatedUser);
});

app.get("/delete", async (req, res) => {
  const deletedUser = await userModel.findOneAndDelete({
    username: "Raeeskhano",
  });
  res.send(deletedUser);
});

const port = 3000;

app.listen(port, () => {
  console.log(`running on http://localhost:${port}`);
});
