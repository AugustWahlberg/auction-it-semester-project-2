/**
 * Shows or hides the edit avatar modal.
 */
 export function editAvatarModal () {
  //Edit Avatar variables
  const editAvatarBtn = document.getElementById(
    "editAvatarBtn"
  );
 
  const editAvatarModal = document.getElementById(
    "editAvatarModal"
  );

  const cancelEditAvatarModal =
    document.querySelector(
      ".cancel-edit-avatar-modal"
    );

  const closeEditAvatarModal =
    document.querySelector(
      ".close-edit-avatar-modal"
    );

  const saveAvatar = document.querySelector(
    ".save-avatar"
  );

  //Edit avatar functions
  if (editAvatarBtn) {
    /**
     * Shows the edit avatar modal when the edit avatar button is clicked.
     */
    editAvatarBtn.addEventListener(
      "click",
      function () {
        editAvatarModal.classList.remove("hidden");
      }
    );
  }


  if (cancelEditAvatarModal) {
    /**
     * Hides the edit avatar modal when the cancel edit avatar modal button is clicked.
     */
    cancelEditAvatarModal.addEventListener(
      "click",
      function () {
        editAvatarModal.classList.add("hidden");
      }
    );
  }

  if (closeEditAvatarModal) {
    /**
     * Hides the edit avatar modal when the close edit avatar modal button is clicked.
     */
    closeEditAvatarModal.addEventListener(
      "click",
      function () {
        editAvatarModal.classList.add("hidden");
      }
    );
  }

  if (saveAvatar) {
    /**
     * Hides the edit avatar modal when the save avatar button is clicked.
     */
    saveAvatar.addEventListener("click", function () {
      editAvatarModal.classList.add("hidden");
    });
  }
}
