// const geoLocation1 = document.querySelector(".geoLocation1");
// const geoLocation2 = document.querySelector(".geoLocation2");
var lat = 0;
var lng = 0;
var alt = 0;
var lat2 = 0;
var lng2 = 0;
var alt2 = 0;
// geoLocation1.addEventListener("click", distance1());
//
// geoLocation2.addEventListener("click", distance2());

function distance1() {

    // Prompt user for permission to access their location
    navigator.geolocation.getCurrentPosition(
      // Success callback function
      (position) => {
        // Get the user's latitude and longitude coordinates
        lat = position.coords.latitude;
        lng = position.coords.longitude;
        alt = position.coords.altitude;

        // Do something with the location data, e.g. display on a map
        console.log(`1 Latitude: ${lat}, longitude: ${lng}, altitude: ${alt}`);
        document.getElementById("lat").innerText = lat;
        document.getElementById("lng").innerText = lng;
        document.getElementById("alt").innerText = alt;
      },
    );

  };



function distance2() {

    // Prompt user for permission to access their location
    navigator.geolocation.getCurrentPosition(
      // Success callback function
      (position) => {
        // Get the user's latitude and longitude coordinates
        lat2 = position.coords.latitude;
        lng2 = position.coords.longitude;
        alt2 = position.coords.altitude;

        // Do something with the location data, e.g. display on a map
        console.log(`2 Latitude: ${lat}, longitude: ${lng}, altitude: ${alt}`);
        document.getElementById("lat2").innerText = lat2;
        document.getElementById("lng2").innerText = lng2;
        document.getElementById("alt2").innerText = alt2;
        calculations();
        altCalc();
      },
    );
  };

// Convert from degrees to radians
function degreesToRadians(degrees) {
  var radians = (degrees * Math.PI)/180;
  return radians;
};

  // Function takes two objects, that contain coordinates to a starting and destination location.
function calculations(){
  let startingLat = degreesToRadians(lat);
  let startingLong = degreesToRadians(lng);
  let destinationLat = degreesToRadians(lat2);
  let destinationLong = degreesToRadians(lng2);

  // Radius of the Earth in kilometers
  let radius = 6571;

  // Haversine equation
  let distanceInKilometers = Math.acos(Math.sin(startingLat) * Math.sin(destinationLat) +
  Math.cos(startingLat) * Math.cos(destinationLat) *
  Math.cos(startingLong - destinationLong)) * radius;

  return distanceInKilometers;
  yards = distanceInKilometers * 1093.61;

  document.getElementById("distance").innerText = yards;

};

function altCalc() {
  var altCalc = alt - alt2;
  document.getElementById("alt-distance").innerText = altCalc;

}
