export function navAction () {
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const homeBtn = document.getElementById("home-btn");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});


homeBtn.addEventListener("click", () => {
  window.location.href = '/pages/listings/';
});

}
