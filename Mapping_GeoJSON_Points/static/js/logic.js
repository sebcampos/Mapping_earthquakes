// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.5, -122.5], 10);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-preview-night-v2/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


let geojsonFeature = sanFranAirport;

// L.geoJson(geojsonFeature, {
//     pointToLayer: function(feature, latlng) {
//       return L.marker(latlng).bindPopup("<h2>" + feature.properties.name + "</h2> <hr> </hr>"+  feature.properties.city + ", " + feature.properties.country);
//      }
// }).addTo(map);

L.geoJson(geojsonFeature, {
    onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup("<h3>Airport code: " + feature.properties.faa + "</h3> <hr> </hr> <h4>Airport name: "+  feature.properties.name +" </h4>" );
    }
}).addTo(map)




// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
