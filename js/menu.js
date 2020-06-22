const menuOpen = document.querySelector("#menu-open");
const nav = document.querySelector(".nav-links ul");
const menuClose = document.querySelector("#menu-close");

menuOpen.addEventListener("click", () => {
  menuOpen.style.display = "none";
  nav.classList.toggle("nav-open");
  menuClose.style.display = "block";
});

menuClose.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  menuOpen.style.display = "block";
  menuClose.style.display = "none";
});
