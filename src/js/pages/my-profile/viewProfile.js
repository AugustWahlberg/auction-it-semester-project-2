import { fetchProfile } from "../../api/user/fetchProfile";

/**
 * Fetches the user's profile data and displays it on the page.
 */
export async function viewProfile() {
  const profileData = await fetchProfile();
   const avatar = profileData.avatar;
   const myProfileAvatar = document.getElementById("userAvatar");
   const profileName = profileData.name;
   const userName = document.getElementById("userName");
   const profileEmail = profileData.email;
   const userEmail = document.getElementById("userEmail");
   const profileCredits = profileData.credits;
   const userCredits = document.getElementById("userCredits");
   myProfileAvatar.src = avatar;
   userName.innerHTML = `${profileName}`;
   userEmail.innerHTML = `${profileEmail}`;
   userCredits.innerHTML = `${profileCredits}`;
 }