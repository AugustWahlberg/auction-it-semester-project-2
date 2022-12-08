export function loginModalActions()
{
//login Variables
const showLoginModal =
  document.getElementById("loginBtn");
const loginModal =
  document.getElementById("loginModal");
const cancelLoginModal = document.querySelector(
  ".cancel-login-modal"
);
const closeLoginModal = document.querySelector(
  ".close-login-modal"
);
const proceedLogin = document.querySelector(
  ".proceed-login"
);

//login functions
showLoginModal.addEventListener(
  "click",
  function () {
    loginModal.classList.remove("hidden");
  }
);

cancelLoginModal.addEventListener(
  "click",
  function () {
    loginModal.classList.add("hidden");
  }
);

closeLoginModal.addEventListener(
  "click",
  function () {
    loginModal.classList.add("hidden");
  }
);

proceedLogin.addEventListener(
  "click",
  function () {
    window.location.href = "/pages/listings/";
  }
);
}
