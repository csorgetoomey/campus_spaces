
var map = L.map('map').setView([47.655548, -122.303200], 16);

// var token ='pk.eyJ1IjoiY3NvcmdlIiwiYSI6ImNqb3A2cGMwMzAxbTkzcW9meDIzMDE0ZHMifQ.R5gWO0aBEldQdqU0Nlir-Q';
// var gl = L.mapboxGL({
//     accessToken: token,
//     style: 'mapbox://styles/csorge/cjvhhz99w0jnm1cq3per2445t',
//     maxZoom: 17,
// }).addTo(map);

L.tileLayer('https://api.mapbox.com/styles/v1/csorge/cjvhhz99w0jnm1cq3per2445t/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Sources: UW Libraries',
    maxZoom: 17,
    accessToken: 'pk.eyJ1IjoiY3NvcmdlIiwiYSI6ImNqb3A2cGMwMzAxbTkzcW9meDIzMDE0ZHMifQ.R5gWO0aBEldQdqU0Nlir-Q'
}).addTo(map);

// map.on('click', function(e) {
//         var popLocation= e.latlng;
//         var popup = L.popup()
//         .setLatLng(popLocation)
//         .setContent('<p>Hello world!<br />This is a nice popup.</p>')
//         .openOn(map);
// });

L.easyButton( 'fa-crosshairs', function(btn, map){
    map.setView(new L.LatLng(47.655548, -122.303200), 16);
}).addTo(map);

// map.on('click', 'testlayer', function (e) {
//     gl.Popup()
//         .setLngLat(e.lngLat)
//         .setHTML("hello")
//         .addTo(map);
// });

controlLayer = L.control.layers().addTo(map);

//needs to be EPSG:4326 when exporting -> save as

var group = L.layerGroup();

$.getJSON("CAMPUS_GEOJSONS/CAMPUS_GEOJSON_COMBINED.geojson",function(data){
    // function onEachFeature(feature, layer) {
    //     layer.bindPopup("Green space");
    // }
    var combined = L.geoJson(data, {style: {stroke: false, fillColor: "white", fillOpacity: .5}}).on('click', clickHandler).addTo(map);
    combined.addTo(group);
});

//green space
$.getJSON("CAMPUS_GEOJSONS/CAMPUS_GEOJSON_LANDSCAPE.geojson",function(data){
    // function onEachFeature(feature, layer) {
    //     layer.bindPopup("Green space");
    // }
    var greenspace = L.geoJson(data, {style: {stroke: false, fillColor: "green", fillOpacity: .5}}).addTo(map);
    greenspace.addTo(group);
    controlLayer.addOverlay(greenspace, "Green Space");
});

//diversity space
$.getJSON("CAMPUS_GEOJSONS/CAMPUS_GEOJSON_DIVERSITY.geojson",function(data){
    // function onEachFeature(feature, layer) {
    //     layer.bindPopup("Diversity space");
    // }
    var diversity = L.geoJson(data, {style: {stroke: false, fillColor: "yellow", fillOpacity: .5}}).addTo(map);
    diversity.addTo(group);
    controlLayer.addOverlay(diversity, "Diversity Space");
});

//social space
$.getJSON("CAMPUS_GEOJSONS/CAMPUS_GEOJSON_SOCIAL.geojson",function(data){
    // function onEachFeature(feature, layer) {
    //     layer.bindPopup("Social space");
    // }
    var social = L.geoJson(data, {style: {stroke: false, fillColor: "red", fillOpacity: .5}}).addTo(map);
    social.addTo(group);
    controlLayer.addOverlay(social, "Social Space");
});

//study space
$.getJSON("CAMPUS_GEOJSONS/CAMPUS_GEOJSON_STUDY.geojson",function(data){
    // function onEachFeature(feature, layer) {
    //     layer.bindPopup("Study space");
    // }
    var study = L.geoJson(data, {style: {stroke: false, fillColor: "blue", fillOpacity: .5}}).addTo(map);
    study.addTo(group);
    controlLayer.addOverlay(study, "Study Space");
});

//path space
$.getJSON("CAMPUS_GEOJSONS/CAMPUS_GEOJSON_PATHS.geojson",function(data){
    // function onEachFeature(feature, layer) {
    //     layer.bindPopup("Path space");
    // }
    var paths = L.geoJson(data, {style: {stroke: false, fillColor: "purple", fillOpacity: .5}}).addTo(map);
    paths.addTo(group);
    controlLayer.addOverlay(paths, "Path Space");
});

function clickHandler(e) {
    var html = '';

    var match = leafletPip.pointInLayer(e.latlng, combined, false);
    if(match.length) {
        for(var i = 0; i < match.length; i++) {
            html += match[i].feature.properties.space + "</b>"
        }
    }
    if(html) {
        map.openPopup(html, e.latlng);
    }
}
