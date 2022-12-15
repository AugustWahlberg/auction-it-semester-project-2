import { authFetch } from "../authFetch.mjs";
import { API_AUCTION_URL } from "../constants.mjs";
const action = "/listings";
const method = "delete";



/**
 * Function to return a post object to create
 * @param {object} listingData 
 * @returns object to create which will be sent to the API
 */
export async function deleteListing(listingID) {

  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  listingID = id;

  const deleteListingURL = `${API_AUCTION_URL}${action}/${listingID}`;
  
    // Make the POST request and parse the response as JSON
    const response = await authFetch (deleteListingURL, {
      method,
  
    });
    const listing = await response.json();
  
    // Return the parsed JSON data
    return listing;
  }