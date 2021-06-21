const jwt = require("jsonwebtoken");
const configs = require("./config");

exports.verifyToken = (req, res, next) => {
  try {
    const token = req.headers["cookie"] || req.query.token;
    const { id: checkID } = req.query;
    if (!token) {
      throw new Error("no validate token");
    } else {
      const myToken = token.slice(4);
      const {
        config: { JWT_SECRET },
      } = configs;
      const check = jwt.verify(myToken, JWT_SECRET);
      //전달된 uid랑 jwt decode uid가 다른 경우 error 처리
      const { uid, nick } = check;
      if (checkID && uid !== checkID) {
        throw new Error("diff uid");
      }
      return res.json({ uid, nick, token });
    }
  } catch (err) {
    // eslint-disable-next-line default-case
    switch (err.message) {
      case "no validate token":
        return res.status(403).json({
          code: 403,
          message: "유효한 토큰이 없습니다. 로그인을 먼저 해주세요.",
        });
      case "jwt expired":
        return res.status(419).json({
          code: 419,
          message: "토큰이 만료되었습니다.",
        });
      case "diff uid":
        return res.status(401).json({
          code: 401,
          message: "유효하지 않은 토큰입니다.",
        });
    }
  }
};
