const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("first dummy middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("second dummy middleware", req.url, req.method);
  next();
});

// app.use((req, res, next) => {
//   console.log("third middleware");
//   res.send("<h1>welcome to third middleware</h1>");
// });

app.get("/", (req, res, next) => {
  console.log("handling /", req.url, req.method);
  res.send("<h1>welcome to / path</h1>");
});

app.get("/contact-us", (req, res, next) => {
  console.log("handling /aboutus", req.url, req.method);
  res.send(`<h1>fill your details here...</h1>
    <form action="/contact-us" method="POST">
     <input type="text" placeholder="enter your name"/>
     <input type="email" placeholder="enter your email"/>
     <input type="submit" value="submit"/>
    </form>
    `);
});

app.post("/contact-us", (req, res, next) => {
  console.log("handling /aboutus", req.url, req.method);
  res.send(`<h1>we will contact you shortly...</h1>`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
