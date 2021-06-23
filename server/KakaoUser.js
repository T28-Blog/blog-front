const express = require("express");
const axios = require("axios");
const db = require("./FirebaseDB.js");
const app = express();

let userID = null;

//카카오 회원번호 가져오기 및 DB에 해당 유저 저장되어 있는지 확인
app.post("/kakao", async (req, res, next) => {
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
});

app.use("/", async (req, res) => {
  try {
    if (!userID) {
      const { oauthUID } = req.body;

      if (oauthUID) {
        userID = oauthUID;
      }
    }
    if (userID) {
      const user = await db.database().ref(`users/user_${userID}`).get();
      const userData = user.val();

      res.json({ userData, userID });
    }
  } catch (e) {
    res.json(e.data);
  } finally {
    userID = null;
  }
});

module.exports = app;
