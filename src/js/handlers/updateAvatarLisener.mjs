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

    updateAvatar(newAvatar);
    console.log(newAvatar);
  });
}

}