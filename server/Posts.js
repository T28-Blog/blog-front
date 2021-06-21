const express = require("express");
const bodyParser = require("body-parser");
const db = require("./FirebaseDB.js");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.post("/", (req, res, next) => {
  const {
    content,
    date,
    desc,
    hashtag,
    hits,
    img,
    name,
    post_id,
    title,
    user_id,
  } = req.query;
  //post가 없는 경우 새로 생성
  if (post_id) {
    if (hashtag) {
      db.database()
        .ref(`posts/post_${post_id}`)
        .set({
          content,
          date,
          desc,
          hashtag,
          hits,
          img,
          name,
          post_id,
          title,
          user_id,
        })
        .then((response) => {
          console.log("done");
          res.json({ isSaved: true });
        })
        .catch((err) => {
          res.json({ isSaved: false, messaage: err });
        });
    } else {
      db.database()
        .ref(`posts/post_${post_id}`)
        .set({
          content,
          date,
          desc,
          hits,
          img,
          name,
          post_id,
          title,
          user_id,
        })
        .then((response) => {
          console.log("done");
          res.json({ isSaved: true });
        })
        .catch((err) => {
          res.json({ isSaved: false, messaage: err });
        });
    }
  }
});

app.get('/', (req, res) => {
  
});

module.exports = app;
