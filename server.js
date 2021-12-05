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
  (err, client) => {
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
      res.send(result);
    });
});

app.delete("/delete", (req, res) => {
  req.body._id = parseInt(req.body._id);
  console.log(req.body);
  db.collection("bangdream").deleteOne(req.body, (err, result) => {
    console.log("삭제완료");
    console.log(result);
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

app.post("/add", (req, res) => {
  db.collection("count")
    .find()
    .toArray((err, result) => {
      if (err) return err;

      db.collection("count").findOne({ name: "게시물갯수" }, (err, res) => {
        var info = {
          _id: res.count,
          title: req.body.title,
          contents: req.body.contents,
        };

        if (err) return err;
        console.log(res.count);

        db.collection("post").insertOne(info, (err, res) => {
          if (err) return err;
          console.log(info);
        });
      });
    });

  db.collection("count").updateOne(
    { name: "게시물갯수" },
    { $inc: { count: 1 } },
    (err, res) => {
      if (err) return err;
    }
  );

  return res.redirect("/ok");
});
