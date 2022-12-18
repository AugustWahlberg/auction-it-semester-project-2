

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
  editAvatarBtn.addEventListener(
    "click",
    function () {
      editAvatarModal.classList.remove("hidden");
    }
  );
}


if (cancelEditAvatarModal) {
  cancelEditAvatarModal.addEventListener(
    "click",
    function () {
      editAvatarModal.classList.add("hidden");
    }
  );
}

if (closeEditAvatarModal) {
  closeEditAvatarModal.addEventListener(
    "click",
    function () {
      editAvatarModal.classList.add("hidden");
    }
  );
}

if (saveAvatar) {
  saveAvatar.addEventListener("click", function () {
    editAvatarModal.classList.add("hidden");
  });
}
}
