
var map = L.map('map').setView([47.655548, -122.303200], 16);

L.tileLayer('', {
    //attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //id: 'mapbox.streets',
    //accessToken: 'pk.eyJ1IjoiY3NvcmdlIiwiYSI6ImNqb3A2cGMwMzAxbTkzcW9meDIzMDE0ZHMifQ.R5gWO0aBEldQdqU0Nlir-Q',
}).addTo(map);

L.easyButton( 'fa-crosshairs', function(btn, map){
    map.panTo(new L.LatLng(47.655548, -122.303200));
}).addTo(map);

controlLayer = L.control.layers().addTo(map);

//needs to be EPSG:4326 when exporting -> save as

//greenspace
$.getJSON("UW_SEATTLE_LANDSCAPE_GREENSPACE.geojson",function(data){
    var greenspace = L.geoJson(data, {style: {stroke: false, fill: true, fillColor: "green", fillOpacity: .5}}).addTo(map);
    controlLayer.addOverlay(greenspace, "Green Space");
});

//diversity
$.getJSON("UW_SEATTLE_BUILDINGS_DIVERSITY.geojson",function(data){
    var diversity = L.geoJson(data, {style: {stroke: false, fill: true, fillColor: "yellow", fillOpacity: .5}}).addTo(map);
    controlLayer.addOverlay(diversity, "Diversity Space");
});

//social
$.getJSON("UW_SEATTLE_BUILDINGS_SOCIAL.geojson",function(data){
    var social = L.geoJson(data, {style: {stroke: false, fill: true, fillColor: "red", fillOpacity: .5}}).addTo(map);
    controlLayer.addOverlay(social, "Social Space");
});

//study
$.getJSON("UW_SEATTLE_BUILDINGS_STUDY.geojson",function(data){
    var study = L.geoJson(data, {style: {stroke: false, fill: true, fillColor: "blue", fillOpacity: .5}}).addTo(map);
    controlLayer.addOverlay(study, "Study Space");
});

//study and social both
$.getJSON("UW_SEATTLE_BUILDINGS_STUDY_SOCIAL_INTERSECTION.geojson",function(data){
    var studySocial = L.geoJson(data, {style: {stroke: false, fill: true, fillColor: "purple", fillOpacity: .5}}).addTo(map);
    controlLayer.addOverlay(studySocial, "Study and Social Space");
});
