import { updateAvatar } from "../api/user/updateAvatar.mjs";
import swal from "sweetalert";

/**
 * Update the avatar of the currently logged in user
 * 
 * @param {object} form - The form element that was submitted
 * @param {object} formData - The data from the form element
 * @param {string} avatar - The URL of the new avatar image
 * @param {object} newAvatar - The avatar data to be sent to the updateAvatar function
 */
export function updateAvatarListener () {
  const form = document.getElementById("editAvatar");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault ();
      const formElement = e.target;
      const formData = new FormData (formElement);
      const avatar = formData.get('avatar');
      const newAvatar = {avatar};

      if (formElement && avatar) {
        updateAvatar(newAvatar);

        swal({
          title: "Your avatar was edited",
          icon: "success",
        });
        
        setTimeout(function() {
          location.reload();
        }, 2000);
      }
    });
  }
}
