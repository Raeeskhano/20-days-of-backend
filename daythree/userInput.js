const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Homepage</title></head>");
    res.write("<body>");
    res.write("<h1>Enter your details</h1>");
    res.write("<form action='/submit-details' method='POST'>");
    res.write("<input type= 'text' name='username' placeholder='username' />");
    res.write("<label for='male'>Male </label>");
    res.write("<input type='radio' id='male' name='gender' value='male' />");
    res.write("<label for='female'>female </label>");
    res.write(
      "<input type='radio' id='female' name='gender' value='female' />"
    );
    res.write("<button type='submit' value='submit'>Submit</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/submit-details" && req.method === "POST") {
    fs.writeFileSync("user.text", "Raees khan");
    res.statusCode = 302; //redirect status code
    res.setHeader("Location", "/");
  }
  res.setHeader("content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Homepage</title></head>");
  res.write("<body>");
  res.write("<h1>follow me on github</h1>");
  res.write("</body>");
  res.write("</html>");
});
const port = 3000;

server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
