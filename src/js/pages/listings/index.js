// const seeMore =
//   document.getElementById("seeMoreBtn");

// seeMore.addEventListener("click", function () {
//   window.location.href = "/pages/user-listing/";
// });


//Create new Listing Functions

export function openCreateListing () {
  console.log("hey");

  const listingsCreateNewBtn =
  document.getElementById("listingsCreateNewBtn");

  const newListingModal = document.getElementById(
  "newListingModal"
);

listingsCreateNewBtn.addEventListener(
  "click",
  function () {
    newListingModal.classList.remove("hidden");
  }
);
}
