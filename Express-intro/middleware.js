const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("middleware chala");
  next(); //it is used when we want to execute other middlewares as well and then goto route
});

app.use((req, res, next) => {});

app.use((req, res, next) => {
  console.log("middleware chala second time");
  next();
});

app.get("/", (req, res) => {
  res.send("your are on Home page");
});

app.get("/contact", (req, res) => {
  res.send("your are on Home page");
});

const port = 3000;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
