import { authFetch } from "../authFetch.mjs";
import { API_AUCTION_URL } from "../constants.mjs";
const action = "/listings/";
const method = "put";

/**
 * Edits a listing by sending a PUT request to the API with the provided listing data.
 * 
 * @param {Number} id - The ID of the listing to edit.
 * @param {Object} listingData - The new data for the listing.
 * @returns {Promise} - A promise that resolves to the API response when the request has completed.
 */
export async function edit(id, listingData) {
  if (!listingData.id) {
    throw new Error("Edit requires a PostID");
  }

  const updateListingURL = API_AUCTION_URL + action + id;
  const response = await authFetch (updateListingURL, {
    method,
    body: JSON.stringify(listingData)
  });
  return response;
}
