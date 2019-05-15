// Initialize and add the map
function initMap() {
  // The location of Uluru
  var oksbølKaserne = { lat: 55.620532, lng: 8.240769 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: oksbølKaserne
  });
  // Icon
  var icon = "billeder/tree.png";
  // Marker
  var marker1POS = { lat: 55.620532, lng: 8.240769 };
  var marker1 = new google.maps.Marker({
    position: marker1POS,
    map: map,
    icon: icon
  });
}
