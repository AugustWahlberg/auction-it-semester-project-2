import { fetchProfile } from "../user/fetchProfile";

/**
 * Retrieves the listings for the logged in user by fetching the user's profile data and returning the listings field.
 * 
 * @returns {Promise} - A promise that resolves to an array of the user's listings when the request has completed.
 */
export async function fetchLoggedInsListings() {
  const profileData = await fetchProfile();
  const userListings = profileData.listings;
  return userListings;
}
