import express = require("express");
import { Request, Response } from "express";

const app = express();

app.get("/ashoik", (req: Request, res: Response) => {
  res.status(200).json({
    message: "welcome to typescript with nodejs"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
