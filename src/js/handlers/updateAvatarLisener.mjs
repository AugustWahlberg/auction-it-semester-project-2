import { updateAvatar } from "../api/user/updateAvatar.mjs";

export function updateAvatarListener () {
const form = document.getElementById("editAvatar");

/**
 * Creating a post if the create post form is submitted
 */

  if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault ();
    const formElement = e.target;
    const formData = new FormData (formElement);
    const avatar = formData.get('avatar');
    const newAvatar = {avatar};
    if (formElement && avatar) {
      updateAvatar(newAvatar);
      console.log(newAvatar);
      setTimeout(function() {
        location.reload();
      }, 1000); // 1000 milliseconds = 1 second
    }
  });
}
}
