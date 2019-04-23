
var map = L.map('map').setView([47.655548, -122.303200], 16);

L.tileLayer('', { attribution: '', maxZoom: 18}).addTo(map);

L.easyButton( 'fa-crosshairs', function(btn, map){
    map.setView(new L.LatLng(47.655548, -122.303200), 16);
}).addTo(map);

controlLayer = L.control.layers().addTo(map);

//needs to be EPSG:4326 when exporting -> save as

//green space
$.getJSON("UW_SEATTLE_LANDSCAPE_GREENSPACE.geojson",function(data){
    var greenspace = L.geoJson(data, {style: {stroke: false, fillColor: "green", fillOpacity: .5}}).addTo(map);
    controlLayer.addOverlay(greenspace, "Green Space");
});

//diversity space
$.getJSON("UW_SEATTLE_BUILDINGS_DIVERSITY.geojson",function(data){
    var diversity = L.geoJson(data, {style: {stroke: false, fillColor: "yellow", fillOpacity: .5}}).addTo(map);
    controlLayer.addOverlay(diversity, "Diversity Space");
});

//social space
$.getJSON("UW_SEATTLE_BUILDINGS_SOCIAL.geojson",function(data){
    var social = L.geoJson(data, {style: {stroke: false, fillColor: "red", fillOpacity: .5}}).addTo(map);
    controlLayer.addOverlay(social, "Social Space");
});

//study space
$.getJSON("UW_SEATTLE_BUILDINGS_STUDY.geojson",function(data){
    var study = L.geoJson(data, {style: {stroke: false, fillColor: "blue", fillOpacity: .5}}).addTo(map);
    controlLayer.addOverlay(study, "Study Space");
});

//both study and social space
$.getJSON("UW_SEATTLE_BUILDINGS_STUDY_SOCIAL_INTERSECTION.geojson",function(data){
    var studySocial = L.geoJson(data, {style: {stroke: false, fillColor: "purple", fillOpacity: .5}}).addTo(map);
    controlLayer.addOverlay(studySocial, "Study and Social Space");
});
