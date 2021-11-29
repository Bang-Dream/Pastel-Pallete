const express = require("express");
const app = express();
const path = require("path");
const port = 3001;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

// app.post("/add", function (req, res) {
//   var info = {
//     title: req.body.title,
//     contents: req.body.contents,
//   };
//   db.collection("bangdream").insertOne(info, function() {
//     console.log("전송완료", info)
//   })
// });
