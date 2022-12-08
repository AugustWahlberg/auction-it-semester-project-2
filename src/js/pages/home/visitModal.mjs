
export function visitModalActions() {
  //Visit confirm variables
const showVisitModal =
document.getElementById("visitBtn");
const visitModal =
document.getElementById("visitModal");
const cancelVisitModal = document.querySelector(
".cancel-visit-modal"
);
const closeVisitModal = document.querySelector(
".close-visit-modal"
);
const proceedVisit = document.querySelector(
".proceed-visit"
);

//Visit confirm functions
showVisitModal.addEventListener(
"click",
function () {
  visitModal.classList.remove("hidden");
}
);
cancelVisitModal.addEventListener(
"click",
function () {
  visitModal.classList.add("hidden");
}
);

closeVisitModal.addEventListener(
"click",
function () {
  visitModal.classList.add("hidden");
}
);

proceedVisit.addEventListener(
"click",
function () {
  window.location.href = "/pages/listings/";
}
);
}
