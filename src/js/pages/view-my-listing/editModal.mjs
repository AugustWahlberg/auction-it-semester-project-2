import { API_AUCTION_URL } from "../../api/constants.mjs"; 
import { authFetch } from "../../api/authfetch.mjs";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const action = "/listings/";
const id = params.get("id");

const url =
API_AUCTION_URL + action + id + "?_seller=true&_bids=true";

export function editModalActions() {
    //Edit new listing variables
  const editListningBtn = document.getElementById(
    "edit-listning-modal-btn"
  );
  const editListingModal = document.getElementById(
    "editListingModal"
  );
  const cancelEditModal = document.querySelector(
    ".cancel-edit-listing-modal"
  );
  const closeEditModal = document.querySelector(
    ".close-edit-listing-modal"
  );
  const confirmEditListning =
    document.querySelector(
      ".confirm-edit-lisiting"
    );
  
    if (cancelEditModal) {
      cancelEditModal.addEventListener(
        "click",
        function () {
          location.reload();
          editListingModal.classList.add("hidden");
        }
      );
    }
  
  
  if (closeEditModal) {
    closeEditModal.addEventListener(
      "click",
      function () {
        editListingModal.classList.add("hidden");
      }
    );
  }
  
  if (confirmEditListning) {
    confirmEditListning.addEventListener(
      "click",
      function () {
        editListingModal.classList.add("hidden");
      }
    );
  }
  
  //Edit new Listing Functions
  if (editListningBtn) {
    editListningBtn.addEventListener(
      "click", showEditListingModal
      );
  }
  
  }


  export async function showEditListingModal(event) {
    event.preventDefault();
      const response = await authFetch(url);
      const listing = await response.json();
      const editListingModal = document.getElementById(
        "editListingModal"
      );
      const editListingForm = document.getElementById("editListing");
      // Set the form field values to the values of the post

      if (editListingForm) {
        editListingForm.title.value = listing.title;
        editListingForm.description.value = listing.description;
        const tags = listing.tags || [];
      const media = listing.media || [];
        editListingForm.tag1.value = tags[0] || "";
      editListingForm.tag2.value = tags[1] || "";
      editListingForm.media1.value = media[0] || "";
      editListingForm.media2.value = media[1] || "";
      editListingForm.media3.value = media[2] || "";
        // Show the modal
        editListingModal.classList.remove("hidden");
      }
     
    }