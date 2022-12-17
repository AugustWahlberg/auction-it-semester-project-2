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

//login functions
if (showLoginModal) {
  showLoginModal.addEventListener(
    "click",
    function () {
      loginModal && cancelLoginModal && closeLoginModal && loginModal.classList.remove("hidden");
    }
  );
}

if (cancelLoginModal) {
  cancelLoginModal.addEventListener(
    "click",
    function () {
      loginModal.classList.add("hidden");
    }
  );
}


if (closeLoginModal)
{
  closeLoginModal.addEventListener(
    "click",
    function () {
      loginModal.classList.add("hidden");
    }
  );
}


}