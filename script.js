function show() {
  const showingredients = document.querySelector(".marg-ingre");
  showingredients.style.display = "inline";
  const menu = document.getElementById("showbutton");
  menu.style.display = "none";
  const show = document.getElementById("hide");
  show.style.display = "inline";
}
function hide() {
  const showingredients = document.querySelector(".marg-ingre");
  showingredients.style.display = "none";
  const menu = document.getElementById("showbutton");
  menu.style.display = "inline";
  const show = document.getElementById("hide");
  show.style.display = "none";
}
