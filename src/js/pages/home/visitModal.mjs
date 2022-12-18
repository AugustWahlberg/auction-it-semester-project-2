/**
 * Adds event listeners to the modal elements for handling the visit modal.
 *
 * @returns {void}
 */
 export function visitModalActions() {
  // Visit confirm variables
  const showVisitModal = document.getElementById("visitBtn");
  const visitModal = document.getElementById("visitModal");
  const cancelVisitModal = document.querySelector(".cancel-visit-modal");
  const closeVisitModal = document.querySelector(".close-visit-modal");
  const proceedVisit = document.querySelector(".proceed-visit");

  // Visit confirm functions
  if (showVisitModal) {
    showVisitModal.addEventListener("click", function () {
      visitModal && cancelVisitModal && closeVisitModal && visitModal.classList.remove("hidden");
    });
  }

  if (cancelVisitModal) {
    cancelVisitModal.addEventListener("click", function () {
      visitModal.classList.add("hidden");
    });
  }

  if (closeVisitModal) {
    closeVisitModal.addEventListener("click", function () {
      visitModal.classList.add("hidden");
    });
  }

  if (proceedVisit) {
    proceedVisit.addEventListener("click", function () {
      window.location.href = "/pages/listings/";
    });
  }
}
