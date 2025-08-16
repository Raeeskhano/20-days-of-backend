const cookieParser = require("cookie-parser");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cookieParser()); // its a pakage which parse cookies

app.get("/", (req, res) => {
  res.cookie("name", "raees"); //setting cookkies
  res.send("done");
});

// app.get("/read", (req, res) => {
//   console.log(req.cookies); //consoling parsed cookies
//   res.send("read page");
// });

//encrypting plaintext password into hash password which is not readable
app.get("/bcrypt", (req, res) => {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash("Raeeskhan123", salt, function (err, hash) {
      console.log(hash);
      res.send(hash);
    });
  });
});

//comparing hashed and plain test password, if matched return true and if not return false
app.get("/dcrypt", (req, res) => {
  bcrypt.compare(
    "Raeeskhan123",
    "$2b$10$X0DUrtl3G94VvO8ZjDv4zeMm8rPHIJcNDI6Z7sxaBitOVu7XznNKi",
    function (err, result) {
      console.log(result);
      res.send(result);
    }
  );
});

//sending token to backend
app.get("/jwt", (req, res) => {
  var token = jwt.sign({ email: "rk7523505@gmail.com" }, "secrete");
  res.cookie("token", token);
  res.send(" jwt done");
});

//now getting token data
app.get("/data", (req, res) => {
  let data = jwt.verify(req.cookies.token, "secret");
  console.log(data);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
