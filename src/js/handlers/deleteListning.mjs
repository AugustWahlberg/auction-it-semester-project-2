
import { deleteListing } from "../api/listings/delete.mjs";
import swal from "sweetalert";

/**
 * Function to handle the delete listing button click event
 * and confirm the delete action with a modal
 */
export function deleteListingHandler () {

  const confirmDeleteListning =
document.querySelector(
  ".confirm-delete-listning"
);
if (confirmDeleteListning) {
  confirmDeleteListning.addEventListener("click", (e) => {
    e.preventDefault ();
  
    deleteListing();
    swal({
      title: "Your listing was deleted",
      icon: "success",
    });
    
    setTimeout(function() {
      window.location.href = '/pages/myprofile/';
    }, 2000);
    
  });
}
}