const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Homepage</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to my Homepage</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/men") {
    res.setHeader("content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Mens</title></head>");
    res.write("<body>");
    res.write("<h1>Mens products</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/women") {
    res.setHeader("content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Women</title></head>");
    res.write("<body>");
    res.write("<h1>womens products</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/kids") {
    res.setHeader("content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>kids</title></head>");
    res.write("<body>");
    res.write("<h1>kids products</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Cart</title></head>");
  res.write("<body>");
  res.write("<h1>Card items</h1>");
  res.write("</body>");
  res.write("</html>");
  return res.end();
});

const port = 3000;

server.listen(port, () => {
  console.log(`the server is running on http://localhost:${port}`);
});
