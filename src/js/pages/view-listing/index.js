//Create new listing variables
const bidListningBtn = document.getElementById(
  "bid-modal-btn"
);
const confirmBidModal = document.getElementById(
  "confirmBidModal"
);
const cancelBidModal = document.querySelector(
  ".cancel-confirm-bid-modal"
);
const closeBidModal = document.querySelector(
  ".close-confirm-bid-modal"
);
const confirmBidListning = document.querySelector(
  ".confirm-bid-listning"
);

//Create new Listing Functions
bidListningBtn.addEventListener(
  "click",
  function () {
    confirmBidModal.classList.remove("hidden");
  }
);
cancelBidModal.addEventListener(
  "click",
  function () {
    confirmBidModal.classList.add("hidden");
  }
);

closeBidModal.addEventListener(
  "click",
  function () {
    confirmBidModal.classList.add("hidden");
  }
);

confirmBidListning.addEventListener(
  "click",
  function () {
    confirmBidModal.classList.add("hidden");
  }
);
