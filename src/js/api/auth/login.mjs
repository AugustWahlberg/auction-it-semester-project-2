import { API_AUCTION_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "post";
const feedbacklogin = document.getElementById("feedback-login");

/**
 * Logs in a user by sending a request to the login endpoint with the provided profile object.
 * The access token and user information are saved in storage if the login is successful.
 * If the login fails, a message is displayed to the user.
 * 
 * @param {Object} profile - The profile object containing the email and password for the user.
 * @return {Promise} - A promise that resolves when the login request has completed.
 */
export async function login(profile) {
  const loginURL = API_AUCTION_URL + action;
  const body = JSON.stringify(profile);
  
  const response = await fetch (loginURL, {
    headers: {
      "Content-Type": "application/json"
    },
    method,
    body
  });
  
  const { accessToken, ...user } = await response.json();
  storage.save("token", accessToken);
  storage.save("profile", user);

  if (accessToken) {
    window.location.href = "/pages/listings/";
  } else if (!accessToken) {
    feedbacklogin.classList.remove("hidden");
    feedbacklogin.innerHTML = "Wrong email or password";
  }
}
