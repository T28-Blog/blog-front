const express = require("express");
const app = express();

const routes = require("./Router.js");

app.use(routes); //서버 라우팅 처리

const Port = process.env.PORT || 4000;

app.listen(Port, () => {
  console.log(`Server on : http://localhost:${Port}`);
});
