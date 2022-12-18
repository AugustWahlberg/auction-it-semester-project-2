import { register } from "../api/auth/register.mjs";

/**
 * Register function to set input from the user into an object
 * if all the inputs are passed
 * the profile will be registered
 * 
 * @param {object} event - The event object
 */
export function setRegisterFormListener(event) {
  const form = document.getElementById("registerForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      const inputPasswordError2 = document.getElementById("password-error-2");
    
      if (profile.password !== profile.passwordRepeat ) {
        inputPasswordError2.style.display = "block";
      } else {
        inputPasswordError2.style.display = "none";
      }

      if (profile.password === profile.passwordRepeat){
        // Send it to the API
        register(profile);
      }
    });
  }
}
