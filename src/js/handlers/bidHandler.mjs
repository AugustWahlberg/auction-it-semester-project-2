import { bid } from "../api/listings/bid.mjs";
import swal from "sweetalert";

/**
 * Function to handle bid form submission
 * Makes a call to the bid API to submit a bid
 * Displays a success or error message depending on the result
 */
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
          swal({
            title: "Your bid was added",
            icon: "success",
          });
          setTimeout(function() {
            location.reload();
          }, 1000); 
        } catch (error) {
          if (error && error.message && localStorage.getItem("token")) {
            swal({
              title: "Either your bid was to low or the listing has expired",
              icon: "error",
            });  
          }
          else if (!localStorage.getItem("token")) {
            swal({
              title: "You have to be logged in to be able to bid",
              icon: "error",
            });  
          }
        }
      }
    });
  }
}
