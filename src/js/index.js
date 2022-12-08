import { setRegisterFormListener } from "./handlers/register.mjs";

//register variables
const showRegisterModal = document.getElementById(
  "registerBtn"
);
const registerModal = document.getElementById(
  "registerModal"
);
const cancelRegisterModal =
  document.querySelector(
    ".cancel-register-modal"
  );
const closeRegisterModal = document.querySelector(
  ".close-register-modal"
);

//register functions
showRegisterModal.addEventListener(
  "click",
  function () {
    registerModal.classList.remove("hidden");
  }
);
cancelRegisterModal.addEventListener(
  "click",
  function () {
    registerModal.classList.add("hidden");
  }
);

closeRegisterModal.addEventListener(
  "click",
  function () {
    registerModal.classList.add("hidden");
  }
);

    setRegisterFormListener();
    // window.location.href = "pages/listings";
