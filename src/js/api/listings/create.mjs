import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";
const action = "/listings";
const method = "post";

/**
 * Function to return a post object to create
 * @param {object} listingData 
 * @returns object to create which will be sent to the API
 */
export async function create(listingData) {

  const createListingURL = API_SOCIAL_URL+action;
  
    // Make the POST request and parse the response as JSON
    const response = await authFetch (createListingURL, {
      method,
      body: JSON.stringify(listingData)
    });
    const listing = await response.json();
  
    // Return the parsed JSON data
    return listing;
  }