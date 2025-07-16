const SumHandler = require("./sum");

const reqHandler = (req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.setHeader("content-Type", "text/html");
    res.write(`<html>
        <head><title>Home</title></head>
        <body>
           <h1>Welcome to Calculator</h1>
           <a href="/calculator">Go to calculator</a> 
        </body>
        </html>
        `);
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("content-Type", "text/html");
    res.write(`<html>
        <head><title>Calculator</title></head>
        <body>
           <h1>Here is the Calculator</h1>
           <form action="/calculate-result" method="POST">
           <input type="text" placeholder ="first num" name="first" />
           <br />
           <input type="text" placeholder ="second num" name="second" />
           <br />
           <input type="submit" value="sum" />
           </form
        </body>
        </html>
        `);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    return SumHandler(req, res);
  }
  res.setHeader("content-Type", "text/html");
  res.write(`<html>
        <head><title>Home</title></head>
        <body>
           <h1>404 page doesnot exist!</h1>
           <a href="/">Go to Home</a> 
        </body>
        </html>
        `);
  return res.end();
};

module.exports = reqHandler;
