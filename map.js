
var map = L.map('map').setView([47.655548, -122.303200], 16);

L.tileLayer('https://api.mapbox.com/styles/v1/csorge/cjvhhz99w0jnm1cq3per2445t/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Sources: UW Libraries',
    maxZoom: 17,
    accessToken: 'pk.eyJ1IjoiY3NvcmdlIiwiYSI6ImNqb3A2cGMwMzAxbTkzcW9meDIzMDE0ZHMifQ.R5gWO0aBEldQdqU0Nlir-Q',
}).addTo(map);

L.easyButton( 'fa-crosshairs', function(btn, map){
    map.setView(new L.LatLng(47.655548, -122.303200), 16);
}).addTo(map);

controlLayer = L.control.layers().addTo(map);

//needs to be EPSG:4326 when exporting -> save as

//green space
$.getJSON("CAMPUS_GEOJSONS/GEOJSON_Landscape.geojson",function(data){
    function onEachFeature(feature, layer) {
        layer.bindPopup("Green space");
    }
    var greenspace = L.geoJson(data, {onEachFeature: onEachFeature, style: {stroke: false, fillColor: "green", fillOpacity: .5}}).addTo(map);
    controlLayer.addOverlay(greenspace, "Green Space");
});

//diversity space
$.getJSON("CAMPUS_GEOJSONS/GEOJSON_Diversity.geojson",function(data){
    function onEachFeature(feature, layer) {
        layer.bindPopup("Diversity space");
    }
    var diversity = L.geoJson(data, {onEachFeature: onEachFeature, style: {stroke: false, fillColor: "yellow", fillOpacity: .5}}).addTo(map);
    controlLayer.addOverlay(diversity, "Diversity Space");
});

//social space
$.getJSON("CAMPUS_GEOJSONS/GEOJSON_Social.geojson",function(data){
    function onEachFeature(feature, layer) {
        layer.bindPopup("Social space");
    }
    var social = L.geoJson(data, {onEachFeature: onEachFeature, style: {stroke: false, fillColor: "red", fillOpacity: .5}}).addTo(map);
    controlLayer.addOverlay(social, "Social Space");
});

//study space
$.getJSON("CAMPUS_GEOJSONS/GEOJSON_Study.geojson",function(data){
    function onEachFeature(feature, layer) {
        layer.bindPopup("Study space");
    }
    var study = L.geoJson(data, {onEachFeature: onEachFeature, style: {stroke: false, fillColor: "blue", fillOpacity: .5}}).addTo(map);
    controlLayer.addOverlay(study, "Study Space");
});

//path space
$.getJSON("CAMPUS_GEOJSONS/GEOJSON_Paths.geojson",function(data){
    function onEachFeature(feature, layer) {
        layer.bindPopup("Path space");
    }
    var paths = L.geoJson(data, {onEachFeature: onEachFeature, style: {weight: 5, color: "purple", opacity: .5}}).addTo(map);
    controlLayer.addOverlay(paths, "Path Space");
});
