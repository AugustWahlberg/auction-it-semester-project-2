import { create } from "../api/listings/create.mjs";


export function setCreateListingListener () {

const form = document.getElementById("createListing");

/**
 * Creating a post if the create post form is submitted
 */

  if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault ();
    const formElement = e.target;
    const formData = new FormData (formElement);

    const title = formData.get('title');
    const desc = formData.get('description');
    const tags = formData.get('tags').split(', ');
    const media = formData.get('media').split(', ');
    const endsAt = formData.get('endsAt');

    const listing = {title, desc, tags, media, endsAt};

    create(listing);
    alert ("New post was created");
  });
}

}