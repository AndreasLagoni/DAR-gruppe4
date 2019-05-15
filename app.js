// Initialize and add the map
function initMap() {
  // The location of  Oksbøl kaserne
  var oksbølKaserne = { lat: 55.620532, lng: 8.240769 };
  // The map, centered at Oksbøl kaserne
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: oksbølKaserne
  });
  // Icon
  var icon = "billeder/tree.png";
  // Marker with content
  var marker1Content = `<div class="contentBox">
  <h1>MJ E. Frandsen</h1>
  <a href="#">Læs mere</a>
</div>`;
  var marker1ContentBox = new google.maps.InfoWindow({
    content: marker1Content
  });
  var marker1POS = { lat: 55.620532, lng: 8.240769 };
  var marker1 = new google.maps.Marker({
    position: marker1POS,
    map: map,
    icon: icon
  });
  marker1.addListener("click", function() {
    marker1ContentBox.open(map, marker1);
    map.setZoom(19);
    map.setCenter(marker1.getPosition());
  });
  /* Her skal der være mulighed for at lave en tabel med Navne og tilhørende Link */
  var FRAbtn = document.getElementById("focusFRA");
  FRAbtn.addEventListener("click", function() {
    google.maps.event.trigger(marker1, "click");
  });
}
