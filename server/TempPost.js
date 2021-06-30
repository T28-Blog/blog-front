const express = require("express");
const db = require("./FirebaseDB.js");
const app = express();

app.post("/", (req, res, next) => {
  const {
    content,
    hashtag,
    img,
    name,
    imgName,
    title,
    user_id,
  } = req.query;
  //post가 없는 경우 새로 생성
  // if (post_id) {
    if (hashtag) {
      db.database()
        .ref(`temp_post/post_${user_id}`)
        .set({
          content,
          hashtag,
          img,
          imgName,
          name,
          // post_id,
          title,
          user_id,
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
          img,
          imgName,
          name,
          title,
          user_id,
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
