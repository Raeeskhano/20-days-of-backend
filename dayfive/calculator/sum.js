const SumHandler = (req, res) => {
  const body = [];
  req.on("data", (chunk) => body.push(chunk));
  req.on("end", () => {
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

    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
<html>
<head><title>Home</title></head>
<body>
  <h1>Your Sum is ${result}</h1>
</body>
</html>`);
    res.end();
  });
};

module.exports = SumHandler;
