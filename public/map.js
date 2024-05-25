// var map = L.map('map').setView([51.505, -0.09], 13);

//         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         }).addTo(map);

//         L.marker([51.5, -0.09]).addTo(map)
//             .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//             .openPopup();
    
   
//         var map = L.map('map').setView([28.675636, 77.437892], 13); // Set view to a default location

//         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         }).addTo(map);

//         var blueIcon = L.icon(
//             {
//                 iconUrl: '/image/car_icons/car_blue.png',
//                 iconSize: [38, 38], // Size of the icon [width, height]
//                 iconAnchor: [19, 38], // Point of the icon which will correspond to marker's location [x, y]
//                 popupAnchor: [0, -38]
//             }
//         );
//         var greenIcon = L.icon(
//             {
//                 iconUrl: '/image/car_icons/car_green.png',
//                 iconSize: [38, 38], // Size of the icon [width, height]
//                 iconAnchor: [19, 38], // Point of the icon which will correspond to marker's location [x, y]
//                 popupAnchor: [0, -38]
//             }
//         );
//         var yellowIcon = L.icon(
//             {
//                 iconUrl: '/image/car_icons/car_yellow.png',
//                 iconSize: [38, 38], // Size of the icon [width, height]
//                 iconAnchor: [19, 38], // Point of the icon which will correspond to marker's location [x, y]
//                 popupAnchor: [0, -38]
//             }
//         );
//         var blackIcon = L.icon(
//             {
//                 iconUrl: '/image/car_icons/car_black.png',
//                 iconSize: [38, 38], // Size of the icon [width, height]
//                 iconAnchor: [19, 38], // Point of the icon which will correspond to marker's location [x, y]
//                 popupAnchor: [0, -38]
//             }
//         );
//         var redIcon = L.icon(
//             {
//                 iconUrl: '/image/car_icons/car_red.png',
//                 iconSize: [38, 38], // Size of the icon [width, height]
//                 iconAnchor: [19, 38], // Point of the icon which will correspond to marker's location [x, y]
//                 popupAnchor: [0, -38]
//             }
//         );
//         // document.getElementById('fetchButton').addEventListener('click', fetchData);
        
//         // function drawPolyline(terminalID) {
//         //     try{
//         //         const response = await fetch(`/getStayData/${terminalID}`);
//         //         const data = await response.json();
//         //         // const latLngs = data.map(point => L.latLng(point.lat, point.lon));
//         //         // const polyline = L.polyline(latLngs, { color: 'red' }).addTo(map);
//         //         // map.fitBounds(polyline.getBounds());
//         //     }catch(error){
//         //         console.error('Error drawing polyline:', error);
//         //     }
            
//         // }

//         const getDataFromAPI = await fetch(`../models/externalData`);
//         console.log(getDataFromAPI);
//         // Process and add markers to the map
//         receivedData.forEach(item => {
//             if (item.location) {
//                 // console.log(item.location.lat);
//                 const coordinates = [item.location.lat, item.location.lon];
//                 const popupContent = `<b>${item.nickname}</b><br>ID: ${item.terminalID}<br>Location Type: ${item.location.locationType}<br>Speed: ${item.location.speed} km/h<br>Acc: ${item.location.acc ? "On" : "Off"}<br>Path: <button type="button" onclick="drawPolyline("865167041335630")">Get Path</button>`
//                 var customIcon = item.location.acc === false ? redIcon : (item.location.acc === true && item.location.speed === 0) ? yellowIcon : (item.location.speed > 0) ? greenIcon : blueIcon;
//                 L.marker(coordinates, { icon: customIcon }).addTo(map)
//                     .bindPopup(popupContent)
//                     .openPopup();
//             }
//         });