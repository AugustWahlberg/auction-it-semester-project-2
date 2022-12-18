import { authFetch } from "../authFetch.mjs";
import { API_AUCTION_URL } from "../constants.mjs";
const action = "/listings/";
const method = "post";

/**
 * Sends a bid request to the API for a specific listing.
 * 
 * @param {Number} amount - The amount of the bid.
 * @returns {Promise} - A promise that resolves to the API response when the request has completed.
 */
export async function bid(amount) {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  const bidListingURL = API_AUCTION_URL + action + id + "/bids";

  const newAmount = { amount };
  const response = await authFetch(bidListingURL, {
    method,
    body: JSON.stringify(newAmount)
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  return response;
}
