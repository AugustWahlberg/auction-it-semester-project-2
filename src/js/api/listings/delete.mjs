import { authFetch } from "../authFetch.mjs";
import { API_AUCTION_URL } from "../constants.mjs";
const action = "/listings";
const method = "delete";

/**
 * Deletes a listing by sending a DELETE request to the API with the provided listing ID.
 * 
 * @param {Number} listingID - The ID of the listing to delete.
 * @returns {Promise} - A promise that resolves to the API response when the request has completed.
 */
export async function deleteListing(listingID) {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  listingID = id;

  const deleteListingURL = `${API_AUCTION_URL}${action}/${listingID}`;
  
  // Make the DELETE request and parse the response as JSON
  const response = await authFetch (deleteListingURL, {
    method,
  });
  const listing = await response.json();
  
  // Return the parsed JSON data
  return listing;
}
