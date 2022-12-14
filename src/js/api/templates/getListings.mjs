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
 
  export function listingTemplate(postData, type) {
    const listing = document.createElement("div");
    const id = postData.id;
    let mainImage = postData.media[0];
    if (postData.media.length === 0) {
      mainImage = "/src/assets/photos/default-photo-listing.png";
    }
    
    const dateTimeFormat = new Intl.DateTimeFormat("fr-FR", dateOptions);
    
    const bidEnds = new Date(postData.endsAt);
    let formatedBidEnds = dateTimeFormat.format(bidEnds);

    const title = postData.title;
  
    listing.classList.add("post");
    listing.setAttribute("id", id);
  
    // if (type === "multiple") {
    //   post.addEventListener("click", (e) => {
    //     // displaySinglePost(postData);
    //   });
    // }
  
    listing.innerHTML = `<div class="w-listings-small rounded overflow-hidden shadow-lg m-5">
              <img class="w-full h-60 object-cover" src="${mainImage}" alt="Mountain">
              <div class="px-6 py-4">
                <div class=" font-bold text-xl mb-2">${title}</div>
                <p class=" 700 text-listing-body">
                  Bud ends: ${formatedBidEnds}
                </p>
              </div>
              <div class="px-6 pb-4">
                <span class="tag">#tag1</span>
                <span class="tag">#tag2</span>
              </div>
              <div class="flex justify-center pb-4"> 
                <button class="see-more-btn" id="seeMoreBtn">See more</button>
              </div>
            </div>
          </div>
  `;
    return listing;
  }