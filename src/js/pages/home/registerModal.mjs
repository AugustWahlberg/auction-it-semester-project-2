export function registerModalActions() {

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
  
  if (showRegisterModal) {
    showRegisterModal.addEventListener(
      "click",
      function () {
        registerModal && cancelRegisterModal && closeRegisterModal && registerModal.classList.remove("hidden");
      }
    );
  }
  
  if (cancelRegisterModal) {
    cancelRegisterModal.addEventListener(
      "click",
      function () {
        registerModal.classList.add("hidden");
      }
    );
  }
   
  
  if (closeRegisterModal) {
    closeRegisterModal.addEventListener(
      "click",
      function () {
        registerModal.classList.add("hidden");
      }
    );
    }
  }