const express = require("express");
const app = express();

const userModel = require("./model/user");
const postModel = require("./model/post");
const user = require("./model/user");

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/create", async (req, res) => {
  userCreated = await userModel.create({
    username: "Raees",
    age: 24,
    email: "raees@gmail.com",
  });

  res.send(userCreated);
});

app.get("/post/create", async (req, res) => {
  let post = await postModel.create({
    postdate: "hello kaise ho sab",
    user: "68a0c58326de5de2a66374b0",
  });

  let user = await userModel.findOne({ _id: "68a0c58326de5de2a66374b0" });
  user.post.push(post._id);
  res.send({ post, user });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
