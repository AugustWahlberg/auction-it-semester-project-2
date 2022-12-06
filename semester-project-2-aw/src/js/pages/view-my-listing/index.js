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

//Create new Listing Functions
editListningBtn.addEventListener(
  "click",
  function () {
    editListingModal.classList.remove("hidden");
  }
);
cancelEditModal.addEventListener(
  "click",
  function () {
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
