import { authFetch } from "../authFetch.mjs";
import { API_AUCTION_URL } from "../constants.mjs";
const action = "/listings/";
const method = "post";

/**
 * Function to return a post object to create
 * @param {object} listingData 
 * @returns object to create which will be sent to the API
 */


 export async function bid(amount) {

  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  const bidListingURL = API_AUCTION_URL+action+id +"/bids";

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
