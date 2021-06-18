const express = require("express");
const bodyParser = require("body-parser");
const db = require("./FirebaseDB.js");
const app = express();

app.use(bodyParser.json());

app.post("/", (req, res, next) => {
  const { id, name } = req.query;
  //user가 없는 경우 새로 생성
  if (id) {
    db.database()
      .ref(`users/user_${id}`)
      .set({
        user_id: id,
        thumbnail: "img/defaultThumbnail.png",
        name,
      })
      .then((response) => {
        console.log("done");
        res.json({ isSaved: true });
      })
      .catch((err) => {
        res.json({ isSaved: false, messaage: err });
      });
  }
});

module.exports = app;
