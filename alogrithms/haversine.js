const getDistance = function getDistanceFromLatitudelongitudeInMiles(
  lat1,
  lon1,
  lat2,
  lon2 //lat2, lon2 are hard coded (coordinates of london)
) {
  if (isNaN(lat1) || isNaN(lon1)) {
    var error = -99999;
    return error; //Returns an error number, if input types are not vaild.
  } else {
    var R = 6371; // Radius of the earth in km
    var dLat = degrees_to_radains(lat2 - lat1); // degrees_to_radains below
    var dLon = degrees_to_radains(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degrees_to_radains(lat1)) *
        Math.cos(degrees_to_radains(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distance_km = R * c; // Distance in km
    var distance_miles = (distance_km / 8) * 5; // Distance in miles
    return distance_miles;
  }
};

function degrees_to_radains(deg) {
  return deg * (Math.PI / 180);
}

module.exports = getDistance;
