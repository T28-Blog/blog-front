const express = require("express");
const jwt = require("jsonwebtoken");
const configs = require("./config");
const app = express();

const { verifyToken } = require("./VerifyJWT");

//새로운 토큰 생성
app.post("/create", async (req, res, next) => {
  try {
    console.log(req.body);

    const {
      config: { JWT_SECRET },
    } = configs;

    const { id: uid, name: nick } = req.body; //가짜 uid
    console.log(uid, nick);
    const token = jwt.sign(
      {
        uid,
        nick,
      },
      JWT_SECRET,
      {
        expiresIn: "2h",
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

//기존 토큰 유효성 검사
app.get("/verify", verifyToken);

module.exports = app;
