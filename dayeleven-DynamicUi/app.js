const express = require("express");
const path = require("path");

const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter"); // import correctly

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

// Middleware to log all incoming requests
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

// To parse form data
app.use(express.urlencoded({ extended: false }));

// Serve static files like CSS from 'Public' folder
app.use(express.static(path.join(__dirname, "Public")));

// Use routers
app.use(userRouter);
app.use(hostRouter);

// 404 handler
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
