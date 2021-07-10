const express = require("express");
const bodyParser = require("body-parser");
const db = require("./FirebaseDB.js");
const app = express();

app.use(bodyParser.json());

app.post("/", (req, res, next) => {
  // 일반 로그인의 경우 email도 입력할 수 있도록
  const { id, name, email } = req.query;
  //user가 없는 경우 새로 생성
  if (id) {
    // 이메일이 있을 시 이메일 서버에 넣기
    if (email) {
      db.database()
        .ref(`users/user_${id}`)
        .set({
          user_id: id,
          thumbnail: "/img/defaultThumbnail.jpg",
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
    // 이메일이 없는 경우 이메일 제외
    else {
      db.database()
        .ref(`users/user_${id}`)
        .set({
          user_id: id,
          thumbnail: "/img/defaultThumbnail.jpg",
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
  }
});

module.exports = app;
