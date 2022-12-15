import { API_AUCTION_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "post";
const feedbacklogin = document.getElementById("feedback-login");

/**
 * Function to log in a user
 * @param {object} profile 
 */
export async function login(profile){
  const loginURL = API_AUCTION_URL + action;
  const body = JSON.stringify(profile);
  
  const response = await fetch (loginURL, {
    headers: {
      "Content-Type": "application/json"
    },
    method,
    body
  });
  
  const{ accessToken, ...user} = await response.json();
  storage.save("token", accessToken);
  storage.save("profile", user);

  if (accessToken) {
    window.location.href = "/pages/listings/";
  }

  else if (!accessToken){
  feedbacklogin.classList.remove("hidden");
  feedbacklogin.innerHTML = "Wrong email or password";
  }
  }