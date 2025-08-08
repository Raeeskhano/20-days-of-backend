const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/profile", (req, res) => {
  res.send("name: Raees khan");
});

app.get("/about", (req, res) => {
  res.send("its about page");
});

const port = 3000;
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
