// Protocols --> rules
//internet par kuch bhi karny k lia rules banai gai hain, jinhony internet banaya hain. ab un rules ko follow karna zarori hain, or ye rules follow hu is lia ye rules apki operating system k software main pre installed aate hain.

// Http and Https:
// yahi protocol hain ya rule hain jis ko follow kary bina app internet pai naa hi kuch baijh sakty hain na manga sakty hain.

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("hello world");
});

const port = 3000;
server.listen(port, () => {
  console.log(`the server is running on http://localhost:${port}`);
});
