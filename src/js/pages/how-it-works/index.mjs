import swal from "sweetalert";



export function contactUsModal() {

  const showContactModal = document.getElementById(
    "contactUsBtn"
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
  
  const contactForm = document.getElementById("contact-us-form");


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
  if ( contactForm) {
    contactForm.addEventListener(
      "submit",
      function (event) {
        event.preventDefault();
        setTimeout(function () {
          swal({
            title: "Thanks for reaching out, we will come back to you in a short time",
            icon: "success",
          });
          setTimeout(function() {
            location.reload();
          }, 1000);
        }, 500);
      }
    );
  }
}
