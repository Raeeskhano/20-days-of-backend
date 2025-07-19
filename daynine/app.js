const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Register body-parser middleware early
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("first dummy middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("second dummy middleware", req.url, req.method);
  next();
});

app.get("/", (req, res, next) => {
  console.log("handling /", req.url, req.method);
  res.send("<h1>welcome to / path</h1>");
});

app.get("/contact-us", (req, res, next) => {
  console.log("handling /contact-us", req.url, req.method);
  res.send(`<h1>fill your details here...</h1>
    <form action="/contact-us" method="POST">
     <input type="text" name="name" placeholder="enter your name"/>
     <input type="email" name="email" placeholder="enter your email"/>
     <input type="submit" value="submit"/>
    </form>
    `);
});

app.post("/contact-us", (req, res, next) => {
  console.log("handling /contact-us POST", req.url, req.method, req.body);
  res.send(
    `<h1>Thank you, ${
      req.body.name || "User"
    }! We will contact you shortly...</h1>`
  );
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
