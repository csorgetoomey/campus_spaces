var map = L.map('map').setView([47.655548, -122.303200], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY3NvcmdlIiwiYSI6ImNqb3A2cGMwMzAxbTkzcW9meDIzMDE0ZHMifQ.R5gWO0aBEldQdqU0Nlir-Q',
}).addTo(map);

L.easyButton( 'fa-crosshairs', function(btn, map){

}).addTo(map);

// loading GeoJSON file - Here my html and usa_adm.geojson file resides in same folder
$.getJSON("uw_buildings.json",function(data){
// L.geoJson function is used to parse geojson file and load on to map
L.geoJson(data).addTo(map);
});

$.getJSON("wagda_wagda_UW_SEATTLE_BUILDINGS.json",function(data){
// L.geoJson function is used to parse geojson file and load on to map
L.geoJson(data).addTo(map);
});
