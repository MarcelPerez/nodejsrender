import express from "express";
import { config } from "dotenv";

config();

const app = express();

app.get("/", (req, res) => {
  res.send("Holaa, esto es una prueba!!");
});

app.get("/api/", (req, res) => {
  res.send("Holaa, este es el metodo api!!");
});

app.use("/api/Users", userRouter);

app.listen(4003);
console.log("Serve on port", 4003);
