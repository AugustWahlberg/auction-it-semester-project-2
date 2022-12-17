import { dateOptions } from "../listings/constants.mjs";
  
  /**
  * Function to render listings
  * @param {object} postDataList
  * @param {const} parent
  */
 
   export function renderListingTemplates(listingDataList, parent) {
    parent.append(...listingDataList.map((item) => listingTemplate(item, "multiple")));
    console.log();
  }
 
  export function listingTemplate(listingData) {
    const listing = document.createElement("div");
    const id = listingData.id;
    let mainImage = listingData.media[0];
    if (listingData.media.length === 0) {
      mainImage = "/src/assets/photos/default-photo-listing.png";
    }
    
    const dateTimeFormat = new Intl.DateTimeFormat("fr-FR", dateOptions);
    
    const bidEnds = new Date(listingData.endsAt);
    let formatedBidEnds = dateTimeFormat.format(bidEnds);

    const title = listingData.title;
    const tags = listingData.tags;
  
    listing.classList.add("post");
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
              <a href="/pages/userlisting/?id=${id}"><button class="see-more-btn" id="seeMoreBtn">See more</button></a>
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