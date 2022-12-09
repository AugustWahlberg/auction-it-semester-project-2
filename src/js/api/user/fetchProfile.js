import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";


export async function fetchProfile() {
  const profile = localStorage.getItem('profile');
  const profileRetrieved =  JSON.parse(profile)
  const userName = profileRetrieved.name;
  const action = `/profiles/${userName}?_listings=true`;
  const allPostsURL = `${API_SOCIAL_URL}${action}`;
  const response = await authFetch (allPostsURL);
  const userProfile = await response.json();
  return userProfile;
}