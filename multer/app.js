const express = require("express");
const app = express();
const path = require("path");
const upload = require("./config/multerconfig");
const userModel = require("./model/user");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("chali hain server");
});

app.get("/profile/upload", (req, res) => {
  res.render("upload");
});

app.get("/profile", async (req, res) => {
  const user = await userModel.create({
    profilePic: "default.png",
  });
  res.render("profile", { user });
});

//use upload.single when you are uploading single file and the name inside single should be same as the name attribute of input tag in form. and its used as middleware in post request.
app.post("/upload", upload.single("image"), (req, res) => {
  const user = userModel.findOneAndUpdate(
    { profilePic: "default.png" },
    { profilePic: "req.file.filename" }
  );
  res.render("profile", { user });
});

app.listen(3000);
