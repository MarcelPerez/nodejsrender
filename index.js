const express = require("express");
require("dotenv").config();
const app = express();

const userRouter = require("./users/user.router");

// import { config } from "dotenv";

// config();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Holaa, esto es una prueba!!");
});

app.get("/api/", (req, res) => {
  res.send("Holaa, este es el metodo api!!");
});

// app.use("/api/Users", userRouter);

app.listen(4003);
console.log("Serve on port", 4003);
