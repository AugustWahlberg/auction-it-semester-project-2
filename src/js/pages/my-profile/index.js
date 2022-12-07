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
editAvatarBtn.addEventListener(
  "click",
  function () {
    editAvatarModal.classList.remove("hidden");
  }
);
cancelEditAvatarModal.addEventListener(
  "click",
  function () {
    editAvatarModal.classList.add("hidden");
  }
);

closeEditAvatarModal.addEventListener(
  "click",
  function () {
    editAvatarModal.classList.add("hidden");
  }
);

saveAvatar.addEventListener("click", function () {
  editAvatarModal.classList.add("hidden");
});

//Create new listing variables
const profileCreateNewBtn =
  document.getElementById("profileCreateNewBtn");
const newListingModal = document.getElementById(
  "newListingModal"
);
const cancel = document.querySelector(
  ".cancel-profile-create-listing-modal"
);
const closeModal = document.querySelector(
  ".close-profile-create-listing-modal"
);
const confirmNewListing = document.querySelector(
  ".confirm-profile-new-lsiting"
);

//Create new Listing Functions
profileCreateNewBtn.addEventListener(
  "click",
  function () {
    newListingModal.classList.remove("hidden");
  }
);
cancel.addEventListener("click", function () {
  newListingModal.classList.add("hidden");
});

closeModal.addEventListener("click", function () {
  newListingModal.classList.add("hidden");
});

confirmNewListing.addEventListener(
  "click",
  function () {
    newListingModal.classList.add("hidden");
  }
);

const seeMore =
  document.getElementById("seeMoreBtn");

seeMore.addEventListener("click", function () {
  window.location.href = "/pages/my-listing/";
});

const logOut = document.getElementById("logout");

logOut.addEventListener("click", function () {
  window.location.href = "/";
});
