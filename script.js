// Margherita read more button
function show() {
  const showmarg = document.querySelector(".marg-ingre");
  showmarg.style.display = "inline";
  const buttonmarg = document.getElementById("showbutton-margherita");
  buttonmarg.style.display = "none";
  const hideMargBtn = document.getElementById("hide-margherita");
  hideMargBtn.style.display = "inline";
}
// Margherita hide button
function hide() {
  const showingredients = document.querySelector(".marg-ingre");
  showingredients.style.display = "none";
  const menu = document.getElementById("showbutton-margherita");
  menu.style.display = "inline";
  const show = document.getElementById("hide-margherita");
  show.style.display = "none";
}

// Quatro formaggi read more button
function showquatro() {
  const quatroformaggi = document.querySelector(".quattro-formaggi-ingre");
  quatroformaggi.style.display = "inline";
  const menuquatroformaggi = document.getElementById("hidebuttonquatro");
  menuquatroformaggi.style.display = "inline";
  const menuquatroformaggishow = document.getElementById("showbuttonquatro");
  menuquatroformaggishow.style.display = "none";
}

// Quatro formaggi hide button
function hidequatro() {
  const showingredients = document.querySelector(".quattro-formaggi-ingre");
  showingredients.style.display = "none";
  const menuquatroformaggishow = document.getElementById("showbuttonquatro");
  menuquatroformaggishow.style.display = "inline";
  const menuquatroformaggi = document.getElementById("hidebuttonquatro");
  menuquatroformaggi.style.display = "none";
}

// Quatro Stagioni Read more button
function showstagioni() {
  const showStagioniIngre = document.querySelector(".quattro-stagioni-ingre");
  showStagioniIngre.style.display = "inline";
  const hidestagioni = document.getElementById("hidebuttonstagioni");
  hidestagioni.style.display = "inline";
  const showstagioni = document.getElementById("showbuttonstagioni");
  showstagioni.style.display = "none";
}

// Quatro stagioni hide button
function hidestagioni() {
  const hideStagioniIngre = document.querySelector(".quattro-stagioni-ingre");
  hideStagioniIngre.style.display = "none";
  const hidestagioni = document.getElementById("hidebuttonstagioni");
  hidestagioni.style.display = "none";
  const showStagioni = document.getElementById("showbuttonstagioni");
  showStagioni.style.display = "inline";
}

// Pizza Calzone read more button
function showcalzone() {
  const calzoneIngre = document.querySelector(".calzone-ingre");
  calzoneIngre.style.display = "inline";
  const hidecalzone = document.getElementById("hidebuttoncalzone");
  hidecalzone.style.display = "inline";
  const menubuttoncalzone = document.getElementById("showbuttoncalzone");
  menubuttoncalzone.style.display = "none"; //
}

// Pizza Calzone Hide button
function hidecalzone() {
  const hidecalzoneIngre = document.querySelector(".calzone-ingre");
  hidecalzoneIngre.style.display = "none";
  const menubuttoncalzone = document.getElementById("showbuttoncalzone");
  menubuttoncalzone.style.display = "inline";
  const hidecalzone = document.getElementById("hidebuttoncalzone");
  hidecalzone.style.display = "none";
}

// Caretierra read more button
function showcaretierra() {
  const showCareIngre = document.querySelector(".carretierra-ingre");
  showCareIngre.style.display = "inline";
  const menubuttoncaretierra = document.getElementById("showbuttoncarretierra");
  menubuttoncaretierra.style.display = "none";
  const hidebuttonCaretierra = document.getElementById("hidebuttoncarretierra");
  hidebuttonCaretierra.style.display = "inline";
}

// Caretierra hide button
function hidecaretierra() {
  const showCareIngre = document.querySelector(".carretierra-ingre");
  showCareIngre.style.display = "none";
  const menubuttoncaretierra = document.getElementById("showbuttoncarretierra");
  menubuttoncaretierra.style.display = "inline";
  const hidebuttonCarretierra = document.getElementById(
    "hidebuttoncarretierra"
  );
  hidebuttonCarretierra.style.display = "none";
}

// Capricciosa Read more button
function showcapricciosa() {
  const showbuttonCapr = document.querySelector(".capricciosa-ingre");
  showbuttonCapr.style.display = "inline";
  const showbtncap = document.getElementById("showbuttoncapricciosa");
  showbtncap.style.display = "none";
  const hidebtncap = document.getElementById("hidebuttoncapricciosa");
  hidebtncap.style.display = "inline";
}

// Capricciosa hide button
function hidecapricciosa() {
  const hidebuttonCap = document.querySelector(".capricciosa-ingre");
  hidebuttonCap.style.display = "none";
  const showbtncap = document.getElementById("showbuttoncapricciosa");
  showbtncap.style.display = "inline";
  const hidebtncap = document.getElementById("hidebuttoncapricciosa");
  hidebtncap.style.display = "none";
}

// Patate Read more button
function showpatate() {
  const showMenuPat = document.querySelector(".patate-ingre");
  showMenuPat.style.display = "inline";
  const showbtnpat = document.getElementById("showbuttonpat");
  showbtnpat.style.display = "none";
  const hidebtnpat = document.getElementById("hidebuttonpat");
  hidebtnpat.style.display = "inline";
}

// Patate hide button
function hidepatate() {
  const showMenuPat = document.querySelector(".patate-ingre");
  showMenuPat.style.display = "none";
  const showbtnpat = document.getElementById("showbuttonpat");
  showbtnpat.style.display = "inline";
  const hidebtnpat = document.getElementById("hidebuttonpat");
  hidebtnpat.style.display = "none";
}

// PIZZA RICOLA READ MORE BUTTON
function showricola() {
  const showMenuRicola = document.querySelector(".ricola-ingre");
  showMenuRicola.style.display = "inline";
  const shwbtnRicola = document.getElementById("showbuttonricola");
  shwbtnRicola.style.display = "none";
  const hidebtnRicola = document.getElementById("hidebuttonricola");
  hidebtnRicola.style.display = "inline";
}

// PIZZA RICOLA HIDE BUTTON
function hidericola() {
  const showMenuRicola = document.querySelector(".ricola-ingre");
  showMenuRicola.style.display = "none";
  const shwbtnRicola = document.getElementById("showbuttonricola");
  shwbtnRicola.style.display = "inline";
  const hidebtnRicola = document.getElementById("hidebuttonricola");
  hidebtnRicola.style.display = "none";
}

// PIZZA NEAPOLITAN READ MORE BUTTON
function showneapolitan() {
  const showMenuNeapolitan = document.querySelector(".neapolitan-ingre");
  showMenuNeapolitan.style.display = "inline";
  const shwbtnNeapolitan = document.getElementById("showbuttonneapolitan");
  shwbtnNeapolitan.style.display = "none";
  const hidebtnNeapolitan = document.getElementById("hidebuttonneapolitan");
  hidebtnNeapolitan.style.display = "inline";
}

// PIZZA NEAPOLITAN HIDE BUTTON
function hideneapolitan() {
  const showMenuNeapolitan = document.querySelector(".neapolitan-ingre");
  showMenuNeapolitan.style.display = "none";
  const showbtnNeapolitan = document.getElementById("showbuttonneapolitan");
  showbtnNeapolitan.style.display = "inline";
  const hidebtnNeapolitan = document.getElementById("hidebuttonneapolitan");
  hidebtnNeapolitan.style.display = "none";
}
