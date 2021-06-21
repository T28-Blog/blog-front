const express = require("express");
const jwt = require("jsonwebtoken");
const configs = require("./config");
const app = express();

const { verifyToken } = require("./VerifyJWT");

//기존 토큰 유효성 검사
app.get("/verify", verifyToken);

//새로운 토큰 생성
app.post("/create", (req, res, next) => {
  try {
    const {
      config: { JWT_SECRET },
    } = configs;

    const { id: uid, name: nick } = req.body;

    const token = jwt.sign(
      {
        uid,
        nick,
      },
      JWT_SECRET,
      {
        expiresIn: "24h",
        issuer: "team28",
      }
    );

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.cookie("jwt", token, {
      maxAge: 3600 * 24 * 1000,
      httpOnly: true,
    });
    return res.json({ code: 200, message: "토큰이 발급되었습니다.", token });
  } catch (err) {
    return res.status(500).json({
      code: 500,
      message: "서버 에러",
    });
  }
});

//토큰 삭제
app.delete("/delete", (req, res, next) => {
  res.clearCookie("jwt");
  return res.json({ done: "delete jwt" });
});

module.exports = app;
