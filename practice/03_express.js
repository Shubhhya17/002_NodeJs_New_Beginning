"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/ashoik", function (req, res) {
    res.status(200).json({
        message: "welcome to typescript with nodejs"
    });
});
app.listen(3000, function () {
    console.log("Server running on port 3000");
});
