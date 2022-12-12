import { authFetch } from "../authfetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";


const method = "put";

/**
 * Function to return a post object to create
 * @param {object} newAvatar 
 * @returns object to create which will be sent to the API
 */
export async function updateAvatar(newAvatar) {

const profile = localStorage.getItem('profile');
const profileRetrieved =  JSON.parse(profile);
const userName = profileRetrieved.name;
const createListingURL = API_SOCIAL_URL+ `/profiles/${userName}/media`;
  
    // Make the POST request and parse the response as JSON
    const response = await authFetch (createListingURL, {
      method,
      body: JSON.stringify(newAvatar)
    });
    const editedAvatar = await response.json();
  
    // Return the parsed JSON data
    return editedAvatar;
  }