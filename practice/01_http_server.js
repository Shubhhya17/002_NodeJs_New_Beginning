
let http = require("http");

let server = http.createServer((req, res)=>{
    res.write("<h1> Welcome to http server </h1>")
    res.end();
})
server.listen(8080) 
console.log("Server is Running")

//http    