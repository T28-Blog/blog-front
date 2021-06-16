const express = require("express");
const path = require("path");

const router = express.Router();

const index = path.resolve("../public/index.html"); //추후에 빌드 파일 내 index.html 경로로 수정해야 함

router.get("/", (req, res) => {
  res.sendFile(__dirname, index);
});

module.exports = router;
