const express = require("express");
const jwt = require("jsonwebtoken");
const configs = require("./config");
const app = express();

//const { verifyToken } = require("./VerifyJWT");

app.post("/create", async (req, res, next) => {
  try {
    console.log(req.body);
    console.log(req.data);
    console.log(req.query);
    const {
      config: { JWT_SECRET },
    } = configs;
    console.log(JWT_SECRET);

    const uid = "123123"; //가짜 uid
    const nick = "젠킨스"; //user 이름 (또는 설정한 닉네임)

    const token = jwt.sign(
      {
        uid,
        nick,
      },
      JWT_SECRET,
      {
        expiresIn: "5m", // 5분
        issuer: "토큰발급자",
      }
    );

    return res.json({
      code: 200,
      message: "토큰이 발급되었습니다.",
      token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      code: 500,
      message: "서버 에러",
    });
  }
});

module.exports = app;
