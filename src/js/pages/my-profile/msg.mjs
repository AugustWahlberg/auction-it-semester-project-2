/**
 * Informs the visitor that they need to be logged in to perform certain actions, and offers them the option to log in or go to the homepage.
 */
 export function informVisiterMsg() {
  const msgModal = document.getElementById("msgModal");
  const cancelMsgModal = document.querySelector(".cancel-msg-modal");
  const closeMsgModal = document.querySelector(".close-msg-modal");
  const goToHomepage = document.querySelector(".goToHomepage");

  if (cancelMsgModal) {
    /**
     * Redirects the user to the listings page when the cancel message modal button is clicked.
     */
    cancelMsgModal.addEventListener(
      "click",
      function () {
        window.location.href = '/pages/listings/';
      }
    );
  }

  if (closeMsgModal) {
    /**
     * Redirects the user to the listings page when the close message modal button is clicked.
     */
    closeMsgModal.addEventListener(
      "click",
      function () {
        window.location.href = '/pages/listings/';
      }
    );
  }

  if (goToHomepage) {
    /**
     * Redirects the user to the homepage when the go to homepage button is clicked.
     */
    goToHomepage.addEventListener(
      "click",
      function () {
        window.location.href = "/";
      }
    );
  }

  if (msgModal && !localStorage.getItem("token")) {
    /**
     * Shows the message modal if the user is not logged in.
     */
    msgModal.classList.remove("hidden");
  }
}
