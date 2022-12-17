//Contact us variables
const showContactModal = document.getElementById(
  "contact-us-btn"
);
const contactModal = document.getElementById(
  "contactModal"
);
const cancelContactModal = document.querySelector(
  ".cancel-contact-modal"
);
const closeContactModal = document.querySelector(
  ".close-contact-modal"
);
const sendContact = document.querySelector(
  ".send-contact"
);

//Contact functions
showContactModal.addEventListener(
  "click",
  function () {
    contactModal.classList.remove("hidden");
  }
);
cancelContactModal.addEventListener(
  "click",
  function () {
    contactModal.classList.add("hidden");
  }
);

closeContactModal.addEventListener(
  "click",
  function () {
    contactModal.classList.add("hidden");
  }
);

sendContact.addEventListener(
  "click",
  function () {
    contactModal.classList.add("hidden");
  }
);