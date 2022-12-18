import { authFetch } from "../authFetch.mjs";
import { API_AUCTION_URL } from "../constants.mjs";
const action = "/listings";
const method = "post";

/**
 * Creates a new listing by sending a request to the API with the provided listing data.
 * 
 * @param {Object} listingData - The data for the new listing.
 * @returns {Promise} - A promise that resolves to the API response when the request has completed.
 */
export async function create(listingData) {
  const createListingURL = API_AUCTION_URL + action;
  
  // Make the POST request and parse the response as JSON
  const response = await authFetch (createListingURL, {
    method,
    body: JSON.stringify(listingData)
  });
  
  // Return the parsed JSON data
  return response;
}
