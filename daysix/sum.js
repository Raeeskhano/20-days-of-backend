const SumHandler = (req, res) => {
  console.log("1. data came");
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
    console.log("2. chunk came");
  });
  req.on("end", () => {
    console.log("3. request end");
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);

    const first = Number(bodyObj.first);
    const second = Number(bodyObj.second);

    if (isNaN(first) || isNaN(second)) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "text/html");
      res.end(
        `<html><body><h1>Invalid input. Please provide valid numbers.</h1></body></html>`
      );
      return;
    }

    const result = first + second;
    console.log(result);

    console.log("4. sending response");
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
    <html>
     <head><title>Home</title></head>
     <body>
      <h1>Your Sum is ${result}</h1>
      <a href="/">Go to Home</a>
     </body>
    </html>`);
    res.end();

    console.log("5. response ended.");
  });
};

module.exports = SumHandler;
 