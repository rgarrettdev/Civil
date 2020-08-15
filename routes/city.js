const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/", (req, res) => {
  request(
    "https://bpdts-test-app.herokuapp.com/city/London/users",
    (error, response, body) => {
      if (error) {
        //Check for errors
        res.json(error);
        res.status(500);
      } else {
        body = JSON.parse(body); //Parse to JSON
        res.send(body);
        res.status(200);
      }
    }
  );
});

module.exports = router;
