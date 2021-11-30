const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
app.use(cors());
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const MongoClient = require("mongodb").MongoClient;
const port = process.env.port || 3001;

var db;
MongoClient.connect(
  "mongodb+srv://admin:qwer1234@cluster0.rjy7d.mongodb.net/react?retryWrites=true&w=majority",
  function (err, client) {
    if (err) return console.log(err);
    db = client.db("bangdream");
    app.listen(port, () => {
      console.log(`listening on http://localhost:${port}`);
    });
  }
);

app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("/api/list", (req, res) => {
  db.collection("post")
    .find()
    .toArray((err, result) => {
      if (err) return err;
      // console.log(result);
      res.send(result);
    });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

app.post("/add", (req, res) => {
  var info = {
    title: req.body.title,
    contents: req.body.contents,
  };
  db.collection("post").insertOne(info, (err, res) => {
    if (err) return err;
    console.log("전송완료");
    console.log(info.title);
    console.log(info.contents);
  });
  return res.redirect("/ok");
});
