const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  process.exit(); //exit the process after logging the req
});

const port = 3001;
server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
