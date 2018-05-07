const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const bodyparser = require("body-parser");

app.use(bodyparser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("moi");
});
app.get("/tweets", (req, res) => {
  res.send("asdasdasdd");
});

app.listen(port);
console.log("listening on http://localhost:" + port);
