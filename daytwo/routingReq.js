const http = require("http");
const server = http.createServer((req, res) => {
  console.log(res);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Welcome To Homepage</title></head>");
    res.write("<body><h1>Hello, welcome to Home-Page</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>About page</title></head>");
    res.write("<body><h1>Hello, welcome to About-page</h1></body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First page</title></head>");
  res.write("<body><h1>page not founds</h1></body>");
  res.write("</html>");
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
