import { API_AUCTION_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";
const feedbackReg = document.getElementById("feedback-reg");

/**
 * Registers a new user by sending a request to the register endpoint with the provided profile object.
 * If the registration is successful, the user is redirected to the homepage.
 * If the registration fails, an error message is displayed to the user.
 * 
 * @param {Object} profile - The profile object containing the information for the new user.
 * @return {Promise} - A promise that resolves when the register request has completed.
 */
export async function register(profile) {
  const registerURL = API_AUCTION_URL + action;
  const body = JSON.stringify(profile);
  const response = await fetch (registerURL, {
    headers: {
      "Content-Type": "application/json"
    },
    method,
    body
  });

  const result = await response.json();

  if (result.statusCode === 400) {
    feedbackReg.classList.remove("hidden");
    feedbackReg.classList.remove("form-success");
    feedbackReg.classList.add("form-error");
    feedbackReg.innerHTML = "Profile already exists";
  } else if (result.id) {
    feedbackReg.classList.remove("hidden");
    feedbackReg.classList.add("form-success");
    feedbackReg.classList.remove("form-error");
    feedbackReg.innerHTML = "You have successfully registered a user";
    setTimeout(goToHomepage, 3000);
  }
}

/**
 * Redirects the user to the homepage.
 */
function goToHomepage() {
  window.location.href = '/';
}
