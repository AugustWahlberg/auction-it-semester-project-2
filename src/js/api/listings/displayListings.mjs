import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";

/**
 * Retrieves all listings by sending a GET request to the API.
 * 
 * @returns {Promise} - A promise that resolves to the API response when the request has completed.
 */
export async function getListings() {
  const allListingsURL = `${API_AUCTION_URL}${action}`;
  const response = await authFetch (allListingsURL);
  const allListings = await response.json();
  return allListings;
}
