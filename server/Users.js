const express = require("express");
const bodyParser = require("body-parser");
const db = require("./FirebaseDB.js");
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  db.database.ref(`users/user_${req.user_id}`).then((res) => {
    console.log(res);
    console.log('get from DB server success')
  });
});

app.post("/", (req, res, next) => {
  const { id, email } = req.query;
  const name = email.slice(0, email.indexOf("@"));
  //user가 없는 경우 새로 생성
  if (id) {
    db.database()
      .ref(`users/user_${id}`)
      .set({
        user_id: id,
        thumbnail: "img/defaultThumbnail.png",
        name,
        email,
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
