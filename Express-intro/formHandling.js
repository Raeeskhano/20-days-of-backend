const express = require("express");

const app = express();

//used for data handling
app.use(express.json()); //used for json data handling
app.use(express.urlencoded({ extended: true })); // used for urlencoded data handling

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = 3000;
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
