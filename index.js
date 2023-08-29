import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hola Nodejs");
});

app.listen(4003);
console.log("Serve on port", 4003);
