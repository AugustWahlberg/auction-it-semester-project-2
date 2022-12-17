import { bid } from "../api/listings/bid.mjs";

export function bidOnListing() {
  const form = document.getElementById("bidForm");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formElement = e.target;
      const formData = new FormData(formElement);
      let amount = formData.get("amount");
      amount = parseInt(amount);

      if (formElement && amount) {
        try {
          await bid(amount);
          setTimeout(function() {
            location.reload();
          }, 1000); // 1000 milliseconds = 1 second
        } catch (error) {
          alert(error);
        }
      }
    });
  }
}