"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transactions = express.Router();
transactions.get("/", function (req, res) {
    res.status(200).json({ massage: "Welcome to the Transation get call" });
});
transactions.get("/pierre", function (req, res) {
    res.status(200).json({ massage: "Welcome to the Transations Post Call" });
});
exports.default = transactions;
