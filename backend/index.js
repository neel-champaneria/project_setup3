import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is Ready");
});

app.listen(5000, () => {
  console.log(`serve at http://localhost:5000`);
});
