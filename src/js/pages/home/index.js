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
const proceedRegister = document.querySelector(
  ".proceed-register"
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

proceedRegister.addEventListener(
  "click",
  function () {
    window.location.href = "http://www.vg.no";
  }
);

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
