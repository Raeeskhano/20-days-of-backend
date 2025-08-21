const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/profile", isLoggedIn, async (req, res) => {
  const user = await userModel
    .findOne({ email: req.user.email })
    .populate("posts");
  res.render("profile", { user });
});

app.get("/like/:id", isLoggedIn, async (req, res) => {
  let post = await postModel.findOne({ _id: req.params.id }).populate("user");

  if (post.likes.indexOf(req.user.userid) === -1) {
    post.likes.push(req.user.userid);
  } else {
    post.likes.splice(post.likes.indexOf(req.user.userid), 1);
  }

  await post.save();

  res.redirect("/profile");
});

app.get("/edit/:id", isLoggedIn, async (req, res) => {
  let post = await postModel.findOne({ _id: req.params.id }).populate("user");
  res.render("edit", { post });
});

app.post("/update/:id", isLoggedIn, async (req, res) => {
  let post = await postModel.findOneAndUpdate(
    { _id: req.params.id },
    { content: req.body.content }
  );
  res.redirect("/profile");
});

app.post("/post", isLoggedIn, async (req, res) => {
  const user = await userModel.findOne({ email: req.user.email });
  let { content } = req.body;
  const post = await postModel.create({
    user: user._id,
    content,
  });

  user.posts.push(post._id);
  await user.save();
  res.redirect("/profile");
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  console.log(req.user);
  res.render("login");
});

app.post("/register", async (req, res) => {
  const { name, username, email, password, age } = req.body;
  const user = await userModel.findOne({ email });

  if (user) return res.status(200).send("user already registered.");

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      const user = await userModel.create({
        name,
        username,
        email,
        age,
        password: hash,
      });

      const token = jwt.sign({ email: email, userid: user._id }, "shhhhhhh");
      res.cookie("token", token);
      res.send("registered...");
    });
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });

  if (!user) return res.status(400).send("Something went wrong");

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      const token = jwt.sign({ email: email, userid: user._id }, "shhhhhhh");
      res.cookie("token", token);
      return res.status(200).redirect("/profile");
    } else res.redirect("/login");
  });
});

//middleware for protected routes
function isLoggedIn(req, res, next) {
  if (req.cookies.token === "") return res.redirect("/login");
  else {
    let data = jwt.verify(req.cookies.token, "shhhhhhh");
    req.user = data;
    next();
  }
}

const port = 3000;
app.listen(port, () => {
  console.log(`running on http://localhost:${port}`);
});
