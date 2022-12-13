
import { deleteListing } from "../api/listings/delete.mjs";


export function deleteListingHandler () {

  const confirmDeleteListning =
document.querySelector(
  ".confirm-delete-listning"
);

 confirmDeleteListning.addEventListener("click", (e) => {
  e.preventDefault ();

  deleteListing();
  alert ("Your listing was deleted");
  window.location.href = '/pages/my-profile/';
});

}
