
var map = L.map('map').setView([47.655548, -122.303200], 16);

L.tileLayer('', { attribution: 'Sources: UW Libraries', maxZoom: 18}).addTo(map);

L.easyButton( 'fa-crosshairs', function(btn, map){
    map.setView(new L.LatLng(47.655548, -122.303200), 16);
}).addTo(map);

controlLayer = L.control.layers().addTo(map);

//needs to be EPSG:4326 when exporting -> save as

//green space
$.getJSON("CAMPUS_GEOJSONS/GEOJSON_Landscape.geojson",function(data){
    var greenspace = L.geoJson(data, {style: {stroke: false, fillColor: "green", fillOpacity: .5}}).addTo(map);
    controlLayer.addOverlay(greenspace, "Green Space");
});

//diversity space
$.getJSON("CAMPUS_GEOJSONS/GEOJSON_Diversity.geojson",function(data){
    var diversity = L.geoJson(data, {style: {stroke: false, fillColor: "yellow", fillOpacity: .5}}).addTo(map);
    controlLayer.addOverlay(diversity, "Diversity Space");
});

//social space
$.getJSON("CAMPUS_GEOJSONS/GEOJSON_Social.geojson",function(data){
    var social = L.geoJson(data, {style: {stroke: false, fillColor: "red", fillOpacity: .5}}).addTo(map);
    controlLayer.addOverlay(social, "Social Space");
});

//study space
$.getJSON("CAMPUS_GEOJSONS/GEOJSON_Study.geojson",function(data){
    var study = L.geoJson(data, {style: {stroke: false, fillColor: "blue", fillOpacity: .5}}).addTo(map);
    controlLayer.addOverlay(study, "Study Space");
});

//path space
$.getJSON("CAMPUS_GEOJSONS/GEOJSON_Paths.geojson",function(data){
    var studySocial = L.geoJson(data, {style: {stroke: false, fillColor: "purple", fillOpacity: .5}}).addTo(map);
    controlLayer.addOverlay(studySocial, "Study and Social Space");
});
