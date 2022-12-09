import { fetchProfile } from "../api/user/fetchProfile";

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


export async function setAvatarToNav() {
  const profileData = await fetchProfile()
   const avatar = profileData.avatar;
   const navAvatar = document.getElementById("navAvatar");
   navAvatar.src = avatar;
 }