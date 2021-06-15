const express = require("express");
const path = require("path");

const router = express.Router();

const index = path.resolve("../public/index.html");
//const signIn = path.resolve("../src/pages/SignIn.jsx");

router.get("/", (req, res) => {
  res.sendFile(__dirname, index);
});

/*router.get("/sign-in", (req, res) => {
  res.sendFile(signIn);
});*/

module.exports = router;
