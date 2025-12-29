const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    req.send("Express Server running");
});

app.listen(3000,()=>{
    console.log("Server Stred")
})