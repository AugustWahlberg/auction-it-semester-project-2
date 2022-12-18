
/**
 * Creates a new modal that can be displayed when the "Create New" button is clicked.
 * The modal can be closed by clicking the "Cancel" or "Close" buttons.
 */
 export function createNewModal () {
  //Create new listing variables

  const createNewBtn = document.getElementById("createNewBtn");
  const newListingModal = document.getElementById("newListingModal");
  const cancel = document.querySelector(".cancel-create-listing-modal");
  const closeModal = document.querySelector(".close-create-listing-modal");

  if (createNewBtn) {
    createNewBtn.addEventListener(
      "click",
      function () {
        newListingModal.classList.remove("hidden");
      }
    );
  }
  if (cancel) {
    cancel.addEventListener("click", function () {
      newListingModal.classList.add("hidden");
    });
  }

  if (closeModal) {
    closeModal.addEventListener("click", function () {
      newListingModal.classList.add("hidden");
    });
  }
}
