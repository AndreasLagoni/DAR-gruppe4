//Søgefunktion//
function søgeFunktion() {
  var input, filter, button, p, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  button = document.getElementById("table").getElementsByTagName("button");
  for (i = 0; i < button.length; i++) {
    p = button[i].getElementsByTagName("p")[0];
    txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      button[i].style.display = "flex";
    } else {
      button[i].style.display = "none";
    }
  }
}
function openBurger() {
  var burgerMenu = document.getElementById("burgerContent");
  burgerMenu.classList.toggle("open");
}
// Fortæller der er en variable med navnet Overlay
var overlay;
skolelundenOverlay.prototype = new google.maps.OverlayView();
// Initialize and add the map
function initMap() {
  // The location of  Oksbøl kaserne
  var oksbølKaserne = { lat: 55.619781, lng: 8.243326 };
  // The map, centered at Oksbøl kaserne
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 19,
    center: oksbølKaserne
  });
  // Skolelunden custom map coords og src til overlay
  var overlayCords = new google.maps.LatLngBounds(
    new google.maps.LatLng(55.617852, 8.237505),
    new google.maps.LatLng(55.623228, 8.248288)
  );
  var overlaySrc = "billeder/overlaylarge.png";
  // Objektet der indeholder Overlay bliver brugt her
  overlay = new skolelundenOverlay(overlayCords, overlaySrc, map);

  // Iconer
  var working = "billeder/lightertree_64px.png";
  // Marker med content
  // For loop om alle markers og dens content
  var markerArray = [
    [
      55.619662,
      8.241569,
      `<div class="contentBox">
    <h1>MJ E. Frandsen</h1>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "MJ E. Frandsen"
    ],
    [55.619679, 8.241677, "Content2", "KTBTJ S.AA. Mathiesen"]
  ];
  var newMarkers = new Array();
  for (var index = 0; index < markerArray.length; index++) {
    // Tilføjer hver marker til mappet
    var infowindow = new google.maps.InfoWindow();
    var marker;
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(
        markerArray[index][0],
        markerArray[index][1]
      ),
      map: map,
      icon: working
    });
    // Tilføjer en infowindow for hvert marker med content fra array
    google.maps.event.addListener(
      marker,
      "click",
      (function(marker, index) {
        return function() {
          infowindow.setContent(markerArray[index][2]);
          infowindow.open(map, marker);
          map.setZoom(20);
          map.setCenter(marker.getPosition());
        };
      })(marker, index)
    );
    // Tilføjer en knap for hvert loop til tabel
    var table = document.getElementById("table");
    table.insertAdjacentHTML(
      "beforeend",
      `<button class="linkBtn" onclick="tableMarker()">
    <div class="btnCircle left"></div>
    <p>` +
        markerArray[index][3] +
        `</p>
    <div class="btnCircle right"></div>
  </button>`
    );
  }
  // Åben og luk liste med navne
  var tableBtn = document.getElementById("tableBtn");
  var tableMenu = document.getElementById("menuTable");
  var table = document.getElementById("table");
  tableBtn.addEventListener("click", function() {
    tableMenu.classList.toggle("open");
    table.classList.toggle("open");
  });
  /* Her skal der være mulighed for at lave en tabel med Navne og tilhørende Link */
  var FRAbtn = document.getElementById("focusFRA");
  FRAbtn.addEventListener("click", function() {
    google.maps.event.trigger(marker1, "click");
  });
}
// Starter overlay og putter det på mappet
function skolelundenOverlay(overlayCords, image, map) {
  // Initialize all properties.
  this.bounds_ = overlayCords;
  this.image_ = image;
  this.map_ = map;

  // Define a property to hold the image's div. We'll
  // actually create this div upon receipt of the onAdd()
  // method so we'll leave it null for now.
  this.div_ = null;

  // Explicitly call setMap on this overlay.
  this.setMap(map);
}
skolelundenOverlay.prototype.onAdd = function() {
  var div = document.createElement("div");
  div.style.borderStyle = "none";
  div.style.borderWidth = "0px";
  div.style.position = "absolute";

  // Create the img element and attach it to the div.
  var img = document.createElement("img");
  img.src = this.image_;
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.opacity = "1";
  img.style.position = "absolute";
  div.appendChild(img);

  this.div_ = div;

  // Add the element to the "overlayLayer" pane.
  var panes = this.getPanes();
  panes.overlayLayer.appendChild(div);
};
skolelundenOverlay.prototype.draw = function() {
  // We use the south-west and north-east
  // coordinates of the overlay to peg it to the correct position and size.
  // To do this, we need to retrieve the projection from the overlay.
  var overlayProjection = this.getProjection();

  // Retrieve the south-west and north-east coordinates of this overlay
  // in LatLngs and convert them to pixel coordinates.
  // We'll use these coordinates to resize the div.
  var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
  var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

  // Resize the image's div to fit the indicated dimensions.
  var div = this.div_;
  div.style.left = sw.x + "px";
  div.style.top = ne.y + "px";
  div.style.width = ne.x - sw.x + "px";
  div.style.height = sw.y - ne.y + "px";
};

// The onRemove() method will be called automatically from the API if
// we ever set the overlay's map property to 'null'.
skolelundenOverlay.prototype.onRemove = function() {
  this.div_.parentNode.removeChild(this.div_);
  this.div_ = null;
};

google.maps.event.addDomListener(window, "load", initMap);
