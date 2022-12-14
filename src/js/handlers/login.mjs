import { login } from "../api/auth/login.mjs";

/**
 * Sets up an event listener for the login form and logs the user in when the form is submitted
 */
export function setLoginFormListener() {
  const form = document.getElementById("loginForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      // Send it to the API
      login(profile);
    });
  }
}
