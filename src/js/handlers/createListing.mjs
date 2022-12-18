import { create } from "../api/listings/create.mjs";
import swal from "sweetalert";


/**
 * Function to handle the submission of the create listing form
 * Makes an API call to create a new listing
 * Shows a success or error message to the user
 */
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
     
        const result = await create(listing);
        if (result.ok) {
          swal({
            title: "Your listing was created",
            icon: "success",
          });
          
          setTimeout(function() {
            location.reload();
          }, 2000);
        }
        else {
          swal({
            title: "Something went wrong",
            icon: "error",
          });
          setTimeout(function() {
            location.reload();
          }, 2000);
        }

    });
  }
}