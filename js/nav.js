let navStatus = false;
const nav = document.querySelector("nav");
const container = document.querySelector(".container");
const navUl = document.querySelector("nav ul");

function openNavBar() {
  if (navStatus) {
    nav.style.width = "25%";
    nav.style.height = "100%";
    nav.style.justifyContent = "center";
    container.style.marginLeft = "25%";
    container.style.width = "75%";
    navUl.style.display = "flex";
  } else {
    nav.style.width = "100px";
    nav.style.height = "100%";
    nav.style.justifyContent = "flex-start";
    container.style.marginLeft = "10%";
    container.style.width = "90%";
    navUl.style.display = "none";
  }
  navStatus = !navStatus;
}

document.querySelector("#nav-list").addEventListener("click", openNavBar);
