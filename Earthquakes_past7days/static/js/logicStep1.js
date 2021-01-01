
// Add console.log to check to see if our code is working.
console.log("working");


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/sebcampos/Mapping_Earthquakes/master/torontoRoutes.json";

// Accessing the airport GeoJSON URL from my github
let airportData = "https://raw.githubusercontent.com/sebcampos/Mapping_Earthquakes/master/majorAirports.json";


// create a baselayer defining out different map options
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets
};

// Create the map object with a center and zoom level.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [satelliteStreets] 
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);



// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});



// // grabbing our GeoJson data
// d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
//     console.log(data);
//     //creating the geoJson layer with the retrieved data and adding to map
//     L.geoJson(data, {
//         onEachFeature: function(feature,layer) {
//             layer.bindPopup("<h3>Airport code: " + feature.properties.faa + "</h3> <hr> </hr> <h4>Airport name: "+  feature.properties.name +" </h4>" );
//         }        
//     }).addTo(map);
// });