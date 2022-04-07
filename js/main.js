// hamburger-menu系統DOM
const menuBtn = document.querySelector(".menu-btn");
const menuBackGround = document.querySelector(".menu-bg");
const menuContainer = document.querySelector(".menu-container");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  menuBackGround.classList.toggle("active");
  menuContainer.classList.toggle("active");
});
menuBackGround.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  menuBackGround.classList.toggle("active");
  menuContainer.classList.toggle("active");
});
