//Søgefunktion//
function søgeFunktion() {
  var input, filter, button, p, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  button = document.getElementById("table").getElementsByTagName("button");
  for (var i = 0; i < button.length; i++) {
    p = button[i].getElementsByTagName("p")[0];
    txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      button[i].style.display = "flex";
    } else {
      button[i].style.display = "none";
    }
  }
}
// Åbner og lukker burger menu
function openBurger() {
  var burgerMenu = document.getElementById("burgerContent");
  burgerMenu.classList.toggle("open");
}
// Fortæller der er en variable med navnet Overlay
var overlay;
skolelundenOverlay.prototype = new google.maps.OverlayView();
// Starter mappet
function initMap() {
  // Lokationen af Oksbøl kaserne
  var oksbølKaserne = { lat: 55.619864, lng: 8.242647 };
  //  Mappet centreret i Oksbøl kaserne
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
    <h3>30 MAR 1983<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "MJ E. Frandsen"
    ],
    [
      55.619723,
      8.24158,
      `<div class="contentBox">
    <h1>KTBTJ S.AA. Mathiesen</h1>
    <h3>30 MAR 1983<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "KTBTJ S.AA. Mathiesen"
    ],
    [
      55.619678,
      8.241668,
      `<div class="contentBox">
    <h1>MJ E. Knudsen</h1>
    <h3>30 JUN 1983<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "MJ E. Knudsen"
    ],
    [
      55.619666,
      8.242821,
      `<div class="contentBox">
    <h1>MATFOV F.B. Jørgensen</h1>
    <h3>30 APR 1991<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "MATFOV F.B.Jørgensen"
    ],
    [
      55.619633,
      8.242724,
      `<div class="contentBox">
    <h1>VSARB B.L. Hansen</h1>
    <h3>31 OKT 1988<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "VSARB B.L. Hansen"
    ],
    [
      55.619697,
      8.242725,
      `<div class="contentBox">
    <h1>KN E. Knudsen</h1>
    <h3>30 NOV 1988<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "KN E. Knudsen"
    ],
    [
      55.619616,
      8.24291,
      `<div class="contentBox">
    <h1>MJ J. Bruse</h1>
    <h3>30 APR 1993<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "MJ J. Bruse"
    ],
    [
      55.619651,
      8.243015,
      `<div class="contentBox">
    <h1>MATM K.E. Pedersen</h1>
    <h3>30 APR 1995<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "MATM K.E. Pedersen"
    ],
    [
      55.619621,
      8.243092,
      `<div class="contentBox">
    <h1>DEPARB P.E. Christensen</h1>
    <h3>31 JAN 1997<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "DEPARB P.E. Christensen"
    ],
    [
      55.61964,
      8.241768,
      `<div class="contentBox">
    <h1>KN S.AA. Kristensen</h1>
    <h3>30 OKT 1983<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "KN S.AA. Kristensen"
    ],
    [
      55.619721,
      8.24176,
      `<div class="contentBox">
    <h1>OL E. Mogensen</h1>
    <h3>31 AUG 1984<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "OL E. Mogensen"
    ],
    [
      55.619688,
      8.241829,
      `<div class="contentBox">
    <h1>MJ E.F. Nielsen</h1>
    <h3>31 AUG 1984<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "MJ E.F. Nielsen"
    ],
    [
      55.619632,
      8.241948,
      `<div class="contentBox">
    <h1>KN K.AA. Christensen</h1>
    <h3>31 DEC 1984<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "KN K.AA. Christensen"
    ],
    [
      55.61971,
      8.241948,
      `<div class="contentBox">
    <h1>DEPARB E.V. Tomsen</h1>
    <h3>28 FEB 1985<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "DEPARB E.V. Tomsen"
    ],
    [
      55.61967,
      8.242017,
      `<div class="contentBox">
    <h1>MJ S.A.M. Nielsen</h1>
    <h3>30 SEP 1985<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "MJ S.A.M. Nielsen"
    ],
    [
      55.619632,
      8.242153,
      `<div class="contentBox">
    <h1>KN O.E. Jacobsen</h1>
    <h3>31 maj 1986<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "KN O.E. Jacobsen"
    ],
    [
      55.619709,
      8.24215,
      `<div class="contentBox">
    <h1>MJ H.L.N. Olesen</h1>
    <h3>30 APR 1987<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "MJ H.L.N. Olesen"
    ],
    [
      55.619668,
      8.242251,
      `<div class="contentBox">
    <h1>KN R. Kappel-Hansen</h1>
    <h3>31 AUG 1987<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "KN R. Kappel-Hansen"
    ],
    [
      55.619638,
      8.242343,
      `<div class="contentBox">
    <h1>KN T.S: Møller</h1>
    <h3>31 JAN 1988<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "KN T.S: Møller"
    ],
    [
      55.619707,
      8.242351,
      `<div class="contentBox">
    <h1>VSARB S. Olesen</h1>
    <h3>31 JAN 1988<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "VSARB S. Olesen"
    ],
    [
      55.619679,
      8.242426,
      `<div class="contentBox">
    <h1>MATFOV E. Jensen</h1>
    <h3>30 JUN 1988<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "MATFOV E. Jensen"
    ],
    [
      55.619632,
      8.24255,
      `<div class="contentBox">
    <h1>KN A. Andersen</h1>
    <h3>30 JUN 1988<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "KN A. Andersen"
    ],
    [
      55.619716,
      8.242561,
      `<div class="contentBox">
    <h1>KN F. Köppen</h1>
    <h3>31 JUL 1988<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "KN F. Köppen"
    ],
    [
      55.619676,
      8.242614,
      `<div class="contentBox">
    <h1>MJ G. Heldgaard</h1>
    <h3>30 SEP 1988<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "MJ G. Heldgaard"
    ],
    [
      55.619774,
      8.242733,
      `<div class="contentBox">
    <h1>MJ S.C. Sørensen</h1>
    <h3>28 FEB 1989<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "MJ S.C. Sørensen"
    ],
    [
      55.619838,
      8.242735,
      `<div class="contentBox">
    <h1>MJ S. Slot</h1>
    <h3>30 JUN 1989<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "MJ S. Slot"
    ],
    [
      55.619913,
      8.242741,
      `<div class="contentBox">
    <h1>MJ J. Schultz-Lorentzen</h1>
    <h3>31 JUL 1989<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "MJ J. Schultz-Lorentzen"
    ],
    [
      55.61998,
      8.242749,
      `<div class="contentBox">
    <h1>MJ B. Jensen</h1>
    <h3>30 NOV 1990<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "MJ B. Jensen"
    ],
    [
      55.62005,
      8.242757,
      `<div class="contentBox">
    <h1>VSARB E. Hansen</h1>
    <h3>31 JAN 1991<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "VSARB E. Hansen"
    ],
    [
      55.619733,
      8.242829,
      `<div class="contentBox">
    <h1>MMEK S.L. Nielsen</h1>
    <h3>16 AUG 1991<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "MMEK S.L. Nielsen"
    ],
    [
      55.619808,
      8.242829,
      `<div class="contentBox">
    <h1>KN AA.L. Sørensen</h1>
    <h3>31 AUG 1991<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "KN AA.L. Sørensen"
    ],
    [
      55.619616,
      8.243492,
      `<div class="contentBox">
    <h1>MJ J. Bjergegård</h1>
    <h3>30 APR 2005<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "MJ J. Bjergegård"
    ],
    [
      55.619726,
      8.243205,
      `<div class="contentBox">
    <h1>MJ K.F. Nielsen</h1>
    <h3>31 OKT 2000<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "MJ K.F. Nielsen"
    ],
    [
      55.620001,
      8.243231,
      `<div class="contentBox">
    <h1>MJ A.B. Jæger (Død)</h1>
    <h3>16 JUL 2002<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "MJ A.B. Jæger (Død)"
    ],
    [
      55.619926,
      8.243828,
      `<div class="contentBox">
    <h1>SSG S.K. Jakobsen (KIA)</h1>
    <h3>17 MAR 2008<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "SSG S.K. Jakobsen (KIA)"
    ],
    [
      55.619868,
      8.243929,
      `<div class="contentBox">
    <h1>E.R.Gehlert</h1>
    <h3>31 MAR 2008<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "E.R.Gehlert"
    ],
    [
      55.619934,
      8.243718,
      `<div class="contentBox">
    <h1>KP S. Jensen</h1>
    <h3>31 OKT 2007<h3>
    <a href="profilsideFRA.html" target="_blank">Læs mere</a>
  </div>`,
      "KP S. Jensen"
    ]
  ];
  // Sørg for at tilføje alle markers som admin panelet har lavet
  for (var ind = 0; ind < sessionStorage.length; ind++) {
    if (sessionStorage.key(ind).includes("Navn: ")) {
      var adminMarkers = JSON.parse(
        sessionStorage.getItem(sessionStorage.key(ind))
      );
      var adminMarkerCoords = parseFloat(adminMarkers[0]);
      var adminMarkerCoords2 = parseFloat(adminMarkers[1]);
      var adminMarkersFixed = [
        adminMarkerCoords,
        adminMarkerCoords2,
        adminMarkers[2],
        adminMarkers[3]
      ];
      markerArray.push(adminMarkersFixed);
    } else {
      console.log("Nej den gør ikke");
    }
  }
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
    newMarkers.push(marker);
    // Tilføjer en knap for hvert loop til tabel
    var table = document.getElementById("table");
    table.insertAdjacentHTML(
      "beforeend",
      `<button class="linkBtn" data-markerid="` +
        index +
        `">
    <div class="btnCircle left"></div>
    <p>` +
        markerArray[index][3] +
        `</p>
    <div class="btnCircle right"></div>
  </button>`
    );
    var markerBtn = document.getElementsByClassName("linkBtn");
    // Anvendt JQUERY OG TAGET DIREKTE FRA STACK OVERFLOW
    function tableMarker() {
      google.maps.event.trigger(newMarkers[$(this).data("markerid")], "click");
    }
    for (var c = 0; c < markerBtn.length; c++) {
      markerBtn[c].addEventListener("click", tableMarker, false);
    }
  }
  // Marker for klokken og dens indhold
  var klokkePos = new google.maps.LatLng(55.619278, 8.24203);
  var klokkeIcon = "billeder/bellicon.png";
  var klokkeInfo = `<div class="contentBox">
  <h1>Klokken</h1>
  <p>Den gamle panserklokke.<p><img src="billeder/klokken.png" style="width: 100px">
</div>`;
  var klokkeWindow = new google.maps.InfoWindow({
    content: klokkeInfo
  });
  var markerKlokke = new google.maps.Marker({
    position: klokkePos,
    map: map,
    icon: klokkeIcon
  });
  google.maps.event.addListener(markerKlokke, "click", function() {
    klokkeWindow.open(map, markerKlokke);
    map.setCenter(markerKlokke.getPosition());
  });
  // Åben og luk liste med navne
  var tableBtn = document.getElementById("tableBtn");
  var tableMenu = document.getElementById("menuTable");
  var table = document.getElementById("table");
  tableBtn.addEventListener("click", function() {
    tableMenu.classList.toggle("open");
    table.classList.toggle("open");
  });
}
// Starter overlay og putter det på mappet
// TAGET FRA GOOGLE API DEVELOPER TOOL!!!! //
// TAGET FRA GOOGLE API DEVELOPER TOOL!!!! //
// TAGET FRA GOOGLE API DEVELOPER TOOL!!!! //
// TAGET FRA GOOGLE API DEVELOPER TOOL!!!! //
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
