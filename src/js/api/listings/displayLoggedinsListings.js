import { fetchProfile } from "../user/fetchProfile";

export async function fetchLoggedInsListings () {
  const profileData = await fetchProfile();
  const userListings = profileData.listings;
  return userListings;
}