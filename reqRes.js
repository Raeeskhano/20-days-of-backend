const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method, req.header);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First page</title></head>");
  res.write("<body><h1>Hello from my Node.js server!</h1></body>");
  res.write("</html>");
});

port = 3002;
server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
