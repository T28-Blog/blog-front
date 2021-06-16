const express = require("express");
const routes = require("./Router.js");
const db = require("./FirebaseDB.js");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

let userID = null;

app.use(cors());
app.use(bodyParser.json());

//카카오 회원번호 가져오기 및 DB에 해당 유저 저장되어 있는지 확인
app.post(
  "/kakao/login",
  async (req, res, next) => {
    const { kakaoLoginData } = req.body;
    const { access_token } = kakaoLoginData;

    try {
      const result = await axios({
        method: "post",
        url: "https://kapi.kakao.com/v2/user/me",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          Authorization: `Bearer ${access_token}`,
        },
      });
      const { id } = result.data;
      userID = id;
      next();
      //res.json(userID);
    } catch (e) {
      res.json(e.data);
    }
  },
  async (req, res) => {
    try {
      if (userID) {
        const user = await db.database().ref(`users/user_${userID}`).get();
        const userData = user.val();
        console.log(userData);
        res.json({ userData, userID });
      }
    } catch (e) {
      res.json(e.data);
    }
  }
);

//새 유저 생성
app.post("/users", (req, res, next) => {
  const { id, email } = req.query;
  //user가 없는 경우 새로 생성
  if (id) {
    let name = "";
    if (email) {
      const index = email.indexOf("@");
      name = email.slice(0, index);
    }
    db.database()
      .ref(`users/user_${id}`)
      .set({
        user_id: id,
        email,
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

app.use(routes); //서버 라우팅 처리

const Port = process.env.PORT || 4000;

app.listen(Port, () => {
  console.log(`Server on : http://localhost:${Port}`);
});
