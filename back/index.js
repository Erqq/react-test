const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const bodyparser = require("body-parser");
const Twitter = require("twitter");
const { Model } = require("objection");
const Knex = require("knex");

const knex = Knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "erqq",
    database: "erqq"
  }
});
Model.knex(knex);

class Person extends Model {
  static get tableName() {
    return "persons";
  }
  static get idColumn() {
    return "id";
  }

  static get relationMappings() {}
}

class Tweet extends Model {
  static get tableName() {
    return "tweets";
  }
  static get idColumn() {
    return "id";
  }
  static get textColumn() {
    return "text";
  }
  static get nameColums() {
    return "name";
  }
}

const createSchema = async () => {
  // Create database schema. You should use knex migration files to do this. We
  // create it here for simplicity.
  await knex.schema.createTableIfNotExists("tweets", table => {
    table.increments("id").primary();
    table.string("name");
    table.string("text");
  });
};

/*{createSchema()
  .then(console.log("db connection ok"))
  .catch(console.error);}*/

app.use(bodyparser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("moi");
});
const insertData = async tweets => {
  const allTweets = await Tweet.query().insert(
    tweets.map(tweet => {
      return { text: tweet.text, name: tweet.user.screen_name };
    })
  );
};
const fetchAll = async name => {
  const tweet = await Tweet.query().where("name", name);
  return tweet;
};
app.get("/tweetstodb", (req, res) => {
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
      insertData(tweets);
      res.send("ok");
    }
  });
});

app.get("/tweets", async (req, res) => {
  const tweet = await fetchAll(req.query.username);

  res.send(JSON.stringify(tweet));
});

app.listen(port);
console.log("listening on http://localhost:" + port);
