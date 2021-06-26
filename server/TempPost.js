const express = require("express");
const db = require("./FirebaseDB.js");
const app = express();

app.post("/", (req, res, next) => {
  const {
    content,
    date,
    hashtag,
    hits,
    img,
    name,
    // post_id,
    title,
    user_id,
    text,
  } = req.query;
  //post가 없는 경우 새로 생성
  // if (post_id) {
    if (hashtag) {
      db.database()
        .ref(`temp_post/post_${user_id}`)
        .set({
          content,
          date,
          hashtag,
          hits: +hits,
          img,
          name,
          // post_id,
          title,
          user_id,
          text,
        })
        .then((response) => {
          console.log("done");
          res.json({ isSaved: false });
        })
        .catch((err) => {
          res.json({ isSaved: false, messaage: err });
        });
    } else {
      db.database()
        .ref(`temp_post/post_${user_id}`)
        .set({
          content,
          date,
          hits: +hits,
          img,
          name,
          // post_id,
          title,
          user_id,
          text,
        })
        .then((response) => {
          console.log("done");
          res.json({ isSaved: false });
        })
        .catch((err) => {
          res.json({ isSaved: false, messaage: err });
        });
    }
  // }
});

module.exports = app;
