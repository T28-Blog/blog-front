const jwt = require("jsonwebtoken");
const configs = require("./config");

exports.verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"] || req.query.token;

  if (!token) {
    return res.status(403).json({
      code: 403,
      message: "유효한 토큰이 없습니다. 로그인을 먼저 해주세요.",
    });
  } else {
    const {
      config: { JWT_SECRET },
    } = configs;
    const check = jwt.verify(token, JWT_SECRET);
    console.log(check);
  }
};
