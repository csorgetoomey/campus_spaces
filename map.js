
var map = L.map('map').setView([47.655548, -122.303200], 16);

L.tileLayer('https://api.mapbox.com/styles/v1/csorge/cjvhhz99w0jnm1cq3per2445t/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Sources: UW Libraries',
    maxZoom: 18,
    accessToken: 'pk.eyJ1IjoiY3NvcmdlIiwiYSI6ImNqb3A2cGMwMzAxbTkzcW9meDIzMDE0ZHMifQ.R5gWO0aBEldQdqU0Nlir-Q'
}).addTo(map);

L.easyButton( 'fa-crosshairs', function(btn, map){
    map.setView(new L.LatLng(47.655548, -122.303200), 16);
}).addTo(map);

controlLayer = L.control.layers(null, null, {collapsed: false}).addTo(map);

//needs to be EPSG:4326 when exporting -> save as

//load this geojson from separate js script
var combined = L.geoJson(combined_spaces, {style: {stroke: false, fillColor: "white", fillOpacity: 0}}).addTo(map);

//green space
$.getJSON("CAMPUS_GEOJSONS/CAMPUS_GEOJSON_LANDSCAPE.geojson",function(data){
    var greenspace = L.geoJson(data, {style: {stroke: false, fillColor: "green", fillOpacity: .5}}).addTo(map);
    controlLayer.addOverlay(greenspace, "Green Space");
});

//diversity space
$.getJSON("CAMPUS_GEOJSONS/CAMPUS_GEOJSON_DIVERSITY.geojson",function(data){
    var diversity = L.geoJson(data, {style: {stroke: false, fillColor: "yellow", fillOpacity: .5}}).addTo(map);
    controlLayer.addOverlay(diversity, "Diversity Space");
});

//social space
$.getJSON("CAMPUS_GEOJSONS/CAMPUS_GEOJSON_SOCIAL.geojson",function(data){
    var social = L.geoJson(data, {style: {stroke: false, fillColor: "red", fillOpacity: .5}}).addTo(map);
    controlLayer.addOverlay(social, "Social Space");
});

//study space
$.getJSON("CAMPUS_GEOJSONS/CAMPUS_GEOJSON_STUDY.geojson",function(data){
    var study = L.geoJson(data, {style: {stroke: false, fillColor: "blue", fillOpacity: .5}}).addTo(map);
    controlLayer.addOverlay(study, "Study Space");
});

//path space
$.getJSON("CAMPUS_GEOJSONS/CAMPUS_GEOJSON_PATHS.geojson",function(data){
    var paths = L.geoJson(data, {style: {stroke: false, fillColor: "black", fillOpacity: .5}}).addTo(map);
    controlLayer.addOverlay(paths, "Pedestrian Space");
});

function clickHandler(e) {
    var html = '';
    var match = leafletPip.pointInLayer(e.latlng, combined, false);
    if(match.length) {
        for(var i = 0; i < match.length; i++) {
            html += match[i].feature.properties.space + "<br>"
        }
    }
    if(html) {
        map.openPopup(html, e.latlng);
    }
}

map.on("click", clickHandler);
