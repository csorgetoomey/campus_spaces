
var map = L.map('map').setView([47.655548, -122.303200], 15);

L.tileLayer('', {
    //attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //id: 'mapbox.streets',
    //accessToken: 'pk.eyJ1IjoiY3NvcmdlIiwiYSI6ImNqb3A2cGMwMzAxbTkzcW9meDIzMDE0ZHMifQ.R5gWO0aBEldQdqU0Nlir-Q',
}).addTo(map);

L.easyButton( 'fa-crosshairs', function(btn, map){

}).addTo(map);

controlLayer = L.control.layers().addTo(map);

//needs to be EPSG:4326 when exporting -> save as

$.getJSON("UW_SEATTLE_LANDSCAPE_GREENSPACE.geojson",function(data){
    var greenspace = L.geoJson(data, {style: {stroke: false, fill: true, fillColor: "green", fillOpacity: .8}}).addTo(map);
    controlLayer.addOverlay(greenspace, "Green Space");
});

$.getJSON("UW_SEATTLE_BUILDINGS_DIVERSITY.geojson",function(data){
    var diversity = L.geoJson(data, {style: {stroke: false, fill: true, fillColor: "yellow", fillOpacity: .8}}).addTo(map);
    controlLayer.addOverlay(diversity, "Diversity Space");
});
