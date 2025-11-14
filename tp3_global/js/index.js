const navBtn = document.getElementById("nav-btn");
const navMenu = document.getElementById("nav");

navBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active-mobile-nav");
});