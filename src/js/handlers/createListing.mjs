import { create } from "../api/listings/create.mjs";

export async function setCreateListingListener () {
  const form = document.getElementById("createListing");

  if (form) {
    form.addEventListener("submit", async (e) => {
      
        e.preventDefault ();
        const formElement = form;
        const formData = new FormData(formElement);
        const title = formData.get('title');
        const description = formData.get('description');
        const endsAt = formData.get('endsAt');
        const media1 = formData.get('media1');
        const media2 = formData.get('media2');
        const media3 = formData.get('media3');
        const tag1 = formData.get('tag1');
        const tag2 = formData.get('tag2');
        const tags = [tag1, tag2].filter(value => value !== null && value !== undefined && value !== "");
        const media = [media1, media2, media3].filter(value => value !== null && value !== undefined && value !== "");
        const listing = {title, media, description, tags, endsAt};

        console.log(media1, media2);
        console.log(listing);
        
        // Add each media value as a separate property on the listing object
     
        const result = await create(listing);
        if (result.ok) {
          alert("the post was created");
          location.reload();
        }
        else {
          alert ("somethinng went wrong");
        }

    });
  }
}