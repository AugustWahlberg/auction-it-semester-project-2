import { authFetch } from "../authFetch.mjs";
import { API_AUCTION_URL } from "../constants.mjs";
const action = "/listings/";
const method = "put";

/**
 * Function to return a post object to create
 * @param {object} listingData 
 * @returns object to create which will be sent to the API
 */
export async function edit(id, listingData) {

  if (!listingData.id) {
    throw new Error("Edit requires a PostID");
  }

  const updateListingURL = API_AUCTION_URL+action+id;
    const response = await authFetch (updateListingURL, {
      method,
      body: JSON.stringify(listingData)
    });
    return response;
  }