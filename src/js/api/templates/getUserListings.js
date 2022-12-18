import { dateOptions } from "../listings/constants.mjs";

/**
 * Renders multiple listings templates on the page
 * @param {Object[]} userListingDataList - An array of user listing data objects
 * @param {Element} parent - The parent element where the templates should be appended to
 */
  export function renderloggedInUserListingTemplates(userListingDataList, parent) {
    parent.append(...userListingDataList.map(loggedInUserListingTemplate));
  }

  /**
 * Creates a single user listing template
 * @param {Object} userListings - The data for a single user listing
 * @returns {Element} The listing template element
 */
  export function loggedInUserListingTemplate(userListings) {
    const listing = document.createElement("div");
    const id = userListings.id;
    let mainImage = userListings.media[0];
    if (userListings.media.length === 0) {
      mainImage = "/src/assets/photos/default-photo-listing.png";
    }
   
    const bidEnds = new Date (userListings.endsAt);
    const dateTimeFormat = new Intl.DateTimeFormat("fr-FR", dateOptions);
    let formatedBidEnds = dateTimeFormat.format(bidEnds);
    const tags = userListings.tags;
    const title = userListings.title;
 
    listing.classList.add("listing");
    listing.setAttribute("id", id);
  
    listing.innerHTML = `<div class="w-listings-small rounded overflow-hidden shadow-lg m-5">
              <img class="w-full h-60 object-cover" src="${mainImage}" alt="Mountain">
              <div class="px-6 py-4">
                <div class=" font-bold text-xl mb-2">${title}</div>
                <p class=" 700 text-listing-body">
                  Bud ends: ${formatedBidEnds}
                </p>
              </div>
              <div class="px-6 pb-4" id="tags">
               
              </div>
              <div class="flex justify-center pb-4"> 
              <a href="/pages/mylisting/?id=${id}"><button class="see-more-btn" id="seeMoreBtn">See more</button></a>
              </div>
            </div>
          </div>
  `;

  const tagsElement = listing.querySelector("#tags");
  for (let i = 0; i < tags.length; i++) {
    const tag = document.createElement("div");
    tag.classList.add('tags');
    tag.innerText = tags[i];
    tagsElement.appendChild(tag);
  }
  
    return listing;
  }