/**
 * Hides the "Create Listing" button from the page.
 */
 export function removeCreateButton() {
  // Get the "Create Listing" button
  const createListingBtn = document.getElementById("createNewBtn");
  // Hide the button
  createListingBtn.classList.add("hidden");
}
