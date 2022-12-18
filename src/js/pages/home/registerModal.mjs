/**
 * Adds event listeners to show, cancel, and close the register modal.
 */
 export function registerModalActions() {
  // Get elements for the register modal, show register button, cancel register button, and close register button.
  const showRegisterModal = document.getElementById("registerBtn");
  const registerModal = document.getElementById("registerModal");
  const cancelRegisterModal = document.querySelector(".cancel-register-modal");
  const closeRegisterModal = document.querySelector(".close-register-modal");
  
  // Add event listener to show the register modal when the show register button is clicked.
  if (showRegisterModal) {
    showRegisterModal.addEventListener("click", function () {
      // Make sure all elements exist before removing the hidden class from the register modal.
      registerModal && cancelRegisterModal && closeRegisterModal && registerModal.classList.remove("hidden");
    });
  }
  
  // Add event listener to cancel the register modal and hide it when the cancel register button is clicked.
  if (cancelRegisterModal) {
    cancelRegisterModal.addEventListener("click", function () {
      registerModal.classList.add("hidden");
    });
  }
   
  // Add event listener to close the register modal and hide it when the close register button is clicked.
  if (closeRegisterModal) {
    closeRegisterModal.addEventListener("click", function () {
      registerModal.classList.add("hidden");
    });
  }
}
