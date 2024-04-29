function show() {
  const showingredients = document.querySelector(".marg-ingre");
  showingredients.style.display = "inline";
  const menu = document.getElementById("showbutton-margherita");
  menu.style.display = "none";
  const show = document.getElementById("hide-margherita");
  show.style.display = "inline";
  const margDesc = document.getElementByTagName("p");
  margDesc.style.display = "none";
}
function hide() {
  const showingredients = document.querySelector(".marg-ingre");
  showingredients.style.display = "none";
  const menu = document.getElementById("showbutton-margherita");
  menu.style.display = "inline";
  const show = document.getElementById("hide-margherita");
  show.style.display = "none";
}
function showquatro() {
  const quatroformaggi = document.querySelector(".quattro-formaggi-ingre");
  quatroformaggi.style.display = "inline";
  const menuquatroformaggi = document.getElementById("hidebuttonquatro");
  menuquatroformaggi.style.display = "inline";
  const menuquatroformaggishow = document.getElementById("showbuttonquatro");
  menuquatroformaggishow.style.display = "none";
}
function hidequatro() {
  const showingredients = document.querySelector(".quattro-formaggi-ingre");
  showingredients.style.display = "none";
  const menuquatroformaggishow = document.getElementById("showbuttonquatro");
  menuquatroformaggishow.style.display = "inline";
  const menuquatroformaggi = document.getElementById("hidebuttonquatro");
  menuquatroformaggi.style.display = "none";
}
function showstagioni() {
  const showStagioniIngre = document.querySelector(".quattro-stagioni-ingre");
  showStagioniIngre.style.display = "inline";
  const hidestagioni = document.getElementById("hidebuttonstagioni");
  hidestagioni.style.display = "inline";
  const showstagioni = document.getElementById("showbuttonstagioni");
  showstagioni.style.display = "none";
}
function hidestagioni() {
  const hideStagioniIngre = document.querySelector(".quattro-stagioni-ingre");
  hideStagioniIngre.style.display = "none";
  const hidestagioni = document.getElementById("hidebuttonstagioni");
  hidestagioni.style.display = "none";
  const showStagioni = document.getElementById("showbuttonstagioni");
  showStagioni.style.display = "inline";
}
