const fs = require("fs");
const { buffer } = require("stream/consumers");

const RequestHandler = (req, res) => {
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
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const bodyObject = {};
      const param = new URLSearchParams(fullBody);
      for (const [key, val] of param.entries()) {
        bodyObject[key] = [val];
      }

      //   const bodyObject = Object.fromEntries(param);
      console.log(bodyObject);
      fs.writeFileSync("user.txt", JSON.stringify(bodyObject));
    });

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
};

module.exports = RequestHandler;