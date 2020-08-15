const express = require("express");
const router = express.Router();
const request = require("request");
const haversine = require("../alogrithms/haversine");

router.get("/", (req, res) => {
  request(
    "https://bpdts-test-app.herokuapp.com/users",
    (error, response, body) => {
      if (error) {
        //Check for errors
        res.json(error);
        res.status(500);
      } else {
        var data = JSON.parse(body); //Parse to JSON
        let within50 = [];
        for (let index = 0; index < data.length; index++) {
          var latitude = data[index].latitude;
          var longitude = data[index].longitude;
          if (
            latitude < 80 &&
            latitude > 20 &&
            longitude < 20 &&
            longitude > -20 //This filters out coordinates that would be easily be over 50 miles.
          ) {
            /*Figures gained from 
            https://geohack.toolforge.org/geohack.php?pagename=London&params=51_30_26_N_0_7_39_W_region:GB_type:city*/
            latitudeLondon = 51.507222;
            longitudeLondon = -0.1275;
            var distance = haversine(
              latitude,
              longitude,
              latitudeLondon,
              longitudeLondon
            );
            if (distance <= 50) {
              within50.push(data[index]);
            }
          }
        }
        res.send(within50);
        res.status(200);
      }
    }
  );
});

module.exports = router;
