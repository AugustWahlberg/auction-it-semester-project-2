import { edit } from "../api/listings/edit.mjs";

export async function setEditListingListener () {
  // Declare the "listing" variable at the top of the function
  const listing = {};

  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get('id'); // Move the line of code that sets the "id" value to the top of the function
  listing.id = id;

  const form = document.getElementById("editListing");

  if (form) {
    form.addEventListener("submit", async (e) => {
      
        e.preventDefault ();
        const formElement = form;
        const formData = new FormData(formElement);
        const title = formData.get('title');
        const description = formData.get('description');
        const media1 = formData.get('media1');
        const media2 = formData.get('media2');
        const media3 = formData.get('media3');
        const tag1 = formData.get('tag1');
        const tag2 = formData.get('tag2');
        const tags = [tag1, tag2].filter(value => value !== null && value !== undefined && value !== "");
        // Remove the declaration of the "listing" variable here

        const media = [media1, media2, media3].filter(value => value !== null && value !== undefined && value !== "");
        // Update the "listing" object with the new values
        listing.title = title;
        listing.description = description;
        listing.media = media;
        listing.tags = tags;

        console.log(media1, media2);
        console.log(listing);
        
        // Add each media value as a separate property on the listing object
     
        const result = await edit(id, listing);
        if (result.ok) {
          alert("the post was created");
          location.reload();
        }
        else {
          alert ("something went wrong");
        }

    });
  }
}
