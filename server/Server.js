const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./Router.js");
const users = require("./Users");
// const posts = require("./Posts");
const token = require("./Token");
const kakao = require("./KakaoUser");
const app = express();

app.use(cors());
app.use(bodyParser.json());

//카카오 회원번호 가져오기 및 DB에 해당 유저 저장되어 있는지 확인
app.use("/kakao", kakao);

app.use("/users", users); //새 유저 생성

// app.use("/posts", posts); //새 포스트 생성

app.use("/token", token); //jwt 생성

app.use(routes); //서버 라우팅 처리

const Port = process.env.PORT || 4000;

app.listen(Port, () => {
  console.log(`Server on : http://localhost:${Port}`);
});
