var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var markerCoordinates = [
    [51.5, -0.09],
    [51.51, -0.1],
    [51.49, -0.08]
];

markerCoordinates.forEach(function(coordiates){
    L.marker(coordiates).addTo(map)
    .bindPopup('xyz.<br> 1234544.')
    .openPopup();
});

