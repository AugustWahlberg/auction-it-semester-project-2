import swal from "sweetalert";

/**
 * Shows a modal with a contact form and handles its submission.
 */
export function contactUsModal() {
  // Get the elements for the modal and form
  const showContactModal = document.getElementById("contactUsBtn");
  const contactModal = document.getElementById("contactModal");
  const cancelContactModal = document.querySelector(".cancel-contact-modal");
  const closeContactModal = document.querySelector(".close-contact-modal");
  const contactForm = document.getElementById("contact-us-form");

  // Show the modal when the "Contact Us" button is clicked
  showContactModal.addEventListener("click", function () {
    contactModal.classList.remove("hidden");
  });

  // Hide the modal when the "Cancel" or "X" buttons are clicked
  cancelContactModal.addEventListener("click", function () {
    contactModal.classList.add("hidden");
  });
  closeContactModal.addEventListener("click", function () {
    contactModal.classList.add("hidden");
  });

  // Handle the submission of the contact form
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
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
    });
  }
}
