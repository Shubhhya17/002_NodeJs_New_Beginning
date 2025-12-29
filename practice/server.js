"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transactions_1 = require("./transactions");
var accounts_1 = require("./accounts");
var app = express();
app.use("/module1", transactions_1.default);
app.use("/module2", accounts_1.default);
app.listen(8080, function () {
    console.log("Server Started");
});
//https://localhost:8080/module1 means tansactions default will Exclute
//https://localhost:8080/module1/pierre means pierre Code Will Exclute
//https://localhost:8080/module2 means accounts default  will exclute  (POST)
