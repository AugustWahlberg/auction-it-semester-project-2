/**
 * Shows a modal window to confirm the deletion of a listing.
 * @returns {void}
 */

export function deleteModalActions() {
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
if (deleteListningBtn) {
  deleteListningBtn.addEventListener(
    "click",
    function () {
      confirmDeleteModal.classList.remove("hidden");
    }
  );
}

if (cancelDeleteModal) {
  cancelDeleteModal.addEventListener(
    "click",
    function () {
      confirmDeleteModal.classList.add("hidden");
    }
  );
}

if (closeDeleteModal) {
  closeDeleteModal.addEventListener(
    "click",
    function () {
      confirmDeleteModal.classList.add("hidden");
    }
  );
}

if (confirmDeleteListning) {
  confirmDeleteListning.addEventListener(
    "click",
    function () {
      confirmDeleteModal.classList.add("hidden");
    }
  );
}
}