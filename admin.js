// Åbner og lukker burger menu
function openBurger() {
  var burgerMenu = document.getElementById("burgerContent");
  burgerMenu.classList.toggle("open");
}
var addedMarkers = [];
// Admin side
function addMarker() {
  let name = document.getElementById("inputName").value;
  let date = document.getElementById("inputDate").value;
  let coords = document.getElementById("inputCoords").value;
  let divMaker =
    `<div class="contentBox">
  <h1>` +
    name +
    `</h1>
  <h3>` +
    date +
    `<h3>
  <a href="profilsideFRA.html" target="_blank">Læs mere</a>
</div>`;
  var newMarker = [coords, divMaker, name];
  addedMarkers.push(newMarker);
  sessionStorage.setItem("NewMarker", JSON.stringify(addedMarkers));
}
