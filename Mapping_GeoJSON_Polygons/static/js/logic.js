// Add console.log to check to see if our code is working.
console.log("working");


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-preview-night-v2/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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



// Accessing the airport GeoJSON URL from my github
let airportData = "https://raw.githubusercontent.com/sebcampos/Mapping_Earthquakes/master/majorAirports.json";



// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/sebcampos/Mapping_Earthquakes/master/torontoNeighborhoods.json";




// grabbing our GeoJson data
d3.json(torontoHoods).then(function(data) {
    console.log(data);
    //creating the geoJson layer with the retrieved data and adding to map
    L.geoJson(data, {
        wieght: 1,
        color: "blue",
        fillColor: "yellow",
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h2>Neighborhood: "+ feature.properties.AREA_NAME  +"</h2>")
            
        }
    }).addTo(map);
});

// create a baselayer defining out different map options
let baseMaps = {
    "Streets": streets,
    "Satellite Streets" : satelliteStreets
};




// Create the map object with a center and zoom level.
let map = L.map('mapid', {
    center: [43.7,-79.3],
    zoom: 11,
    layers: [satelliteStreets] 
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);







// let geojsonFeature = sanFranAirport;


// L.geoJson(geojsonFeature, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h3>Airport code: " + feature.properties.faa + "</h3> <hr> </hr> <h4>Airport name: "+  feature.properties.name +" </h4>" );
//     }
// }).addTo(map)




