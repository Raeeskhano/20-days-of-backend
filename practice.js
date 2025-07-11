const http = require("http");

const server = http.createServer((req, res)=>{
    console.log(req.url);
    console.log(res.method);

    res.setHeader("content-Type", "text/html");

    if(req.url === "/"){
        res.write("<h1>Welcome to Home page</h1>");
    } else if(req.url === "/about"){
        res.write("<h1>About Us</h1>");
        res.write("<p>Hello, i am Raees khan. fullstack web developer, content creator. i am doing freelance work in my part time, and pursuing bachelor in software engineering. currently i am in 7th semester, after my bachelor then i will go to germany for master and my career in germany.</p>")
    } else{
        res.statusCode = 404;
        res.write("<h1>Page not found!</h1>")
    }
    res.end();
})

const port = 3000;
server.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`)
})