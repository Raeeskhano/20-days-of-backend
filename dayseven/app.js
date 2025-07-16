const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
});

const port = 3001;

server.listen(port, () => {
  console.log(`the server is running on http://localhost:${port}`);
});
