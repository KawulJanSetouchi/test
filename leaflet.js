var map = L.map('map').setView([35.505, 137.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


var marker = L.marker([35.5, 137.09]).addTo(map);


var circle = L.circle([35.508, 137.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);


var polygon = L.polygon([
    [35.509, 137.08],
    [35.503, 137.06],
    [35.51, 137.047]
]).addTo(map);


marker.bindPopup("<b>はじめまして!</b><br>I am a ポイント.").openPopup();
circle.bindPopup("I am a　円.");
polygon.bindPopup("I am a ポリゴン.");


var popup = L.popup()
    .setLatLng([35.513, 137.09])
    .setContent("こんにちは　ポリゴン加工.")
    .openOn(map);


   

  /* 
    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }
    
    map.on('click', onMapClick);
    */

    var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);



var marker = L.marker([43.644026, 86.572266],
    {alt: 'Urumqi'}).addTo(map) // "Urumqi" is the accessible name of this marker
    .bindPopup('Urumqi, Uyghur is the birthplace of KawulJan!');