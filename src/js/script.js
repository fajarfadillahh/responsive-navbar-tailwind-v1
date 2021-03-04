// show & hidden nav menu
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

// remove menu when click
const navLink = document.querySelectorAll(".nav__link");
navLink.forEach((event) => {
  event.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});
