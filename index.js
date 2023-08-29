import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hola, esto es una prueba!!");
});

app.listen(4003);
console.log("Serve on port", 4003);
