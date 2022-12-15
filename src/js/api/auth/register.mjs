import { API_AUCTION_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";
const feedbackReg = document.getElementById("feedback-reg");

/**
 * Function to register a user
 * @param {object} profile 
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

if (result.statusCode === 400){
  feedbackReg.classList.remove("hidden");
  feedbackReg.classList.remove("form-success");
  feedbackReg.classList.add("form-error");
  feedbackReg.innerHTML = "Profile already exists";
}

else if (result.id) {
  feedbackReg.classList.remove("hidden");
  feedbackReg.classList.add("form-success");
  feedbackReg.classList.remove("form-error");
  feedbackReg.innerHTML = "You have successfully registered a user";
}
}