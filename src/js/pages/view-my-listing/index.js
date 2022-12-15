
import { API_AUCTION_URL } from "../../api/constants.mjs"; 
import { authFetch } from "../../api/authfetch.mjs";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const action = "/listings/";
const id = params.get("id");

const url =
API_AUCTION_URL + action + id + "?_seller=true&_bids=true";

//Create new listing variables
const deleteListningBtn = document.getElementById(
  "delete-listing-modal-btn"
);
const confirmDeleteModal =
  document.getElementById("confirmDeleteModal");
const cancelDeleteModal = document.querySelector(
  ".cancel-confirm-delete-modal"
);
const closeDeleteModal = document.querySelector(
  ".close-confirm-delete-modal"
);
const confirmDeleteListning =
  document.querySelector(
    ".confirm-delete-listning"
  );

//Create new Listing Functions
deleteListningBtn.addEventListener(
  "click",
  function () {
    confirmDeleteModal.classList.remove("hidden");
  }
);
cancelDeleteModal.addEventListener(
  "click",
  function () {
    confirmDeleteModal.classList.add("hidden");
  }
);

closeDeleteModal.addEventListener(
  "click",
  function () {
    confirmDeleteModal.classList.add("hidden");
  }
);

confirmDeleteListning.addEventListener(
  "click",
  function () {
    confirmDeleteModal.classList.add("hidden");
  }
);

//Create new listing variables
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

cancelEditModal.addEventListener(
  "click",
  function () {
    location.reload();
    editListingModal.classList.add("hidden");
  }
);

closeEditModal.addEventListener(
  "click",
  function () {
    editListingModal.classList.add("hidden");
  }
);

confirmEditListning.addEventListener(
  "click",
  function () {
    editListingModal.classList.add("hidden");
  }
);


//Edit new Listing Functions
editListningBtn.addEventListener(
  "click", showEditListingModal
  );

async function showEditListingModal(event) {
  event.preventDefault();
    const response = await authFetch(url);
    const listing = await response.json();
    const editListingForm = document.getElementById("editListing");
    // Set the form field values to the values of the post
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
  