export function informVisiterMsg() {

const msgModal = document.getElementById("msgModal");
const cancelMsgModal = document.querySelector(".cancel-msg-modal");
const closeMsgModal = document.querySelector(".close-msg-modal");
const goToHomepage = document.querySelector(".goToHomepage");


if (cancelMsgModal) {
  cancelMsgModal.addEventListener(
    "click",
    function () {
      window.location.href = '/pages/listings/';
    }
    );
}

  if (closeMsgModal) {
    closeMsgModal.addEventListener(
      "click",
      function () {
        window.location.href = '/pages/listings/';
      }
      );
  }
 
  if ( goToHomepage) {
    goToHomepage.addEventListener(
      "click",
      function () {
        window.location.href = "/";
      }
      );
  }

  if ( msgModal && !localStorage.getItem("token")) {
    msgModal.classList.remove("hidden");
  }
}