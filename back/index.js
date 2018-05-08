const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const bodyparser = require("body-parser");
const Twitter = require("twitter");

app.use(bodyparser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("moi");
});
app.get("/tweets", (req, res) => {
  console.log("", req.query.username);

  var client = new Twitter({
    consumer_key: "Gho8opVWAvjnRCBspRDLn6pSE",
    consumer_secret: "l3MWA2JODjMsomRgCoy6uvL1M6G9SXcYFlAyolcu2ay4yug3jt",
    access_token_key: "18415884-n25aM7SEb1w1W7zFwhoiogbR7X4lCGhKJBLErm0X3",
    access_token_secret: "FUn1UkVXlYJDLL3HzU8FPMXFcZ0UcWTm7GJfaRQFY8lFz"
  });

  const userName = req.query.username;

  var params = { screen_name: userName };
  client.get("statuses/user_timeline", params, function(
    error,
    tweets,
    response
  ) {
    if (!error) {
      res.send(tweets);
    }
  });
});

app.listen(port);
console.log("listening on http://localhost:" + port);
