import { fetchProfile } from "../api/user/fetchProfile";

/**
 * Function to toggle the mobile menu and navigate to the home page when the corresponding buttons are clicked
 */
 export function navAction () {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const homeBtn = document.getElementById("home-btn");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      window.location.href = '/';
    });
  }
}

/**
 * Function to set the user's avatar in the navbar
 * @returns {Promise} 
 */
export async function setAvatarToNav() {
  const profileData = await fetchProfile()
   const avatar = profileData.avatar;
   const navAvatar = document.getElementById("navAvatar");
   navAvatar.src = avatar;
 }
