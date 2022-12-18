import { edit } from "../api/listings/edit.mjs";
import swal from "sweetalert";

/**
 * Function to add an event listener to the form for editing a listing.
 * If the form is submitted, the function will make an API call to edit the listing.
 * @returns {Promise} - The result of the API call to edit the listing.
 */
export async function setEditListingListener () {
  // Declare the "listing" variable at the top of the function
  const listing = {};

  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get('id'); 
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
      
        // Add each media value as a separate property on the listing object
     
        const result = await edit(id, listing);
        if (result.ok) {
          swal({
            title: "Your listing was edited",
            icon: "success",
          });
          
          setTimeout(function() {
            location.reload();
          }, 2000);
        }
        else {
          swal({
            title: "We were not able to edit you listing, please try again",
            icon: "error",
          });
          setTimeout(function() {
            location.reload();
          }, 2000);
        }

    });
  }
}