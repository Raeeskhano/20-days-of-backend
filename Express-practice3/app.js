const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  fs.readdir("./files", (err, files) => {
    res.render("index", { files: files }); //rendering inex page and passing files as a variable
  });
});

app.get("/files/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, filedata) => {
    res.render("show", {
      filename: req.params.filename,
      filedata: filedata,
    });
  });
});

app.post("/edit", (req, res) => {
  fs.rename(
    `./files/${req.body.preveous}`,
    `./files/${req.body.new}`,
    (err) => {
      res.redirect("/");
    }
  );
});

app.get("/edit/:filename", (req, res) => {
  res.render("edit", { filename: req.params.filename }); //filename in object will become a variable in edit page so, we can use them there
});

app.post("/create", (req, res) => {
  fs.writeFile(
    `./files/${req.body.title.split("").join("")}.txt`,
    req.body.details,
    (err) => {
      res.redirect("/");
    }
  );
});

const port = 3000;
app.listen(port, () => {
  console.log(`running on http://localhost:${port}`);
});
