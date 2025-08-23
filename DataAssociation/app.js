const express = require("express");
const userModel = require("./model/users");
const postModel = require("./model/posts");

const app = express();

app.get("/", (req, res) => {
  res.send("working");
});

app.get("/create", async (req, res) => {
  const user = await userModel.create({
    name: "Raees khan",
    username: "Raeeskhano",
    email: "rk7523505@gmail.com",
  });
  res.send(user);
});

app.get("/post/create", async (req, res) => {
  const post = await postModel.create({
    postdata: "hello g how are you this is my first post",
    user: "68a777504aad92089abf0397",
  });

  const user = await userModel.findOne({ _id: "68a777504aad92089abf0397" });
  user.post.push(post._id);
  user.save();

  res.send({ post, user });
});

app.listen(3000);
