/**
 * Function to handle the actions of the login modal.
 * This includes showing the login modal, cancelling the login modal, and closing the login modal.
 */
 export function loginModalActions() {
  //login Variables
  const showLoginModal = document.getElementById("loginBtn");
  const loginModal = document.getElementById("loginModal");
  const cancelLoginModal = document.querySelector(".cancel-login-modal");
  const closeLoginModal = document.querySelector(".close-login-modal");

  //login functions
  if (showLoginModal) {
    showLoginModal.addEventListener("click", () => {
      loginModal && cancelLoginModal && closeLoginModal && loginModal.classList.remove("hidden");
    });
  }

  if (cancelLoginModal) {
    cancelLoginModal.addEventListener("click", () => {
      loginModal.classList.add("hidden");
    });
  }

  if (closeLoginModal) {
    closeLoginModal.addEventListener("click", () => {
      loginModal.classList.add("hidden");
    });
  }
}
