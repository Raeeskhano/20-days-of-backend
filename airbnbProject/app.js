const express = require("express");
const path = require("path");
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");

const app = express();

// Logger middleware
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

// Body parser
app.use(express.urlencoded({ extended: true }));

// Routers
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
