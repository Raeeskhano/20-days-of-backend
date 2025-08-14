const express = require("express");
const path = require("path");
const userModel = require("./Model/userinfo");

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/userinfo", async (req, res) => {
  const allUsers = await userModel.find();
  res.render("userinfo", { users: allUsers });
});

app.post("/registered", async (req, res) => {
  let { name, department, rollno, cgpa } = req.body;
  let user = await userModel.create({
    name,
    department,
    rollno,
    cgpa,
  });

  res.redirect("/userinfo");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
