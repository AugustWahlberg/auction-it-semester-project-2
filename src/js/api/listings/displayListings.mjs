import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";

/**
 * GET ALL POSTS
 * @returns All posts (100 default)
 */

export async function getListings() {
  const allPostsURL = `${API_AUCTION_URL}${action}`;
  const response = await authFetch (allPostsURL);
  const allListings = await response.json();
  // console.log(allPosts)
  return allListings;
}
