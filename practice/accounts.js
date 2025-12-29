"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var accounts = express.Router();
accounts.get("/", function (req, res) {
    res.status(200).json({ message: "welcome to accounts modele" });
});
accounts.post("/", function (res, req) {
    res.status(200).json({ massage: "Welcome to the Post call" });
});
exports.default = accounts;
