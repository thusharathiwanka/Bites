const menuOpen = document.querySelector("#menu-open");
const nav = document.querySelector(".nav-links ul");
const menuClose = document.querySelector("#menu-close");

menuOpen.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  menuOpen.style.display = "none";
  menuClose.style.display = "block";
});

menuClose.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  menuClose.style.display = "none";
  menuOpen.style.display = "block";
});
