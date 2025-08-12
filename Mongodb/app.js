const express = require("express");

const userModal = require("./usermodel");

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
  console.log(req.url, req.method);
});

//create() method is used to create document and apply CRUD operations
//Create
app.get("/create", async (req, res) => {
  const createduser = await userModal.create({
    name: "Raeesa",
    email: "raeesa@gmail.com",
    username: "raeeskhani",
  });
  res.send(createduser);
});

//Read-->find
app.get("/read", async (req, res) => {
  const users = await userModal.find({ username: "raeeskhani" });
  res.send(users);
});

//update
app.get("/update", async (req, res) => {
  const updateduser = await userModal.findOneAndUpdate(
    { username: "raeeskhano" },
    { name: "Haris" },
    { new: true }
  );
  res.send(updateduser);
});

//Delete
app.get("/delete", async (req, res) => {
  const deleteduser = await userModal.findOneAndDelete({
    username: "raeeskhano",
  });
  res.send(deleteduser);
});

app.listen(3000);
