const express = require("express");
const bodyParser = require("body-parser");
const db = require("./FirebaseDB.js");
const app = express();

app.use(bodyParser.json());

app.post("/", (req, res) => {
    const { user_id, name, img, say } = req.query;
    if(id){

    } else {
        
    }
})

app.get("/", (req, res) => {
    
})

module.exports = app;