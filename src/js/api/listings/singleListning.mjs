/* Getting API data to Post site*/

import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { dateOptions } from "./constants.mjs";

const userListing = document.getElementById(
  "listingByUser"
);
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const action = "/listings/";
const id = params.get("id");

const url =
  API_SOCIAL_URL + action + id + "?_seller=true&_bids=true";

export async function getListning() {
  try {
  
    const response = await authFetch(url);
    const listing = await response.json();
    const media = listing.media;
    const title = listing.title;
    const name = listing.seller.name;
    const description = listing.description;
    const endsAt = new Date (listing.endsAt);
    let formatedEndDate = endsAt.toLocaleString("fr-FR", dateOptions);
    const bids = listing.bids;
    const tags = listing.tags;
    const myListingName = document.getElementById("myListingName");
    const myListingTitle = document.getElementById("myListingTitle");
    const myListingStandingBid = document.getElementById("myListingStandingBid");
    const myListingBidEnds = document.getElementById("myListingBidEnds");
    const myListingDescription = document.getElementById("myListingDescription");
    const myListingMainImage = document.getElementById("myListingMainImage");
    const microImages = document.getElementById("images-small");
    const tagsContainer = document.getElementById("tags");
   // for loop for displaying of small images 

for (let i = 0; i < media.length; i++) {
  
  const image = document.createElement("img");
  image.src = media[i];
  image.classList.add('h-10', 'w-10', 'm-2', 'border', 'border-1', 'border-sky-blue', 'cursor-pointer');
  microImages.appendChild(image);

  image.addEventListener('click', () => {
    const src = image.src;
    myListingMainImage.src = src;
  });
}

// for loop for tags

  for (let i = 0; i < tags.length; i++) {
    const tag = document.createElement("div");
    tag.classList.add('tags');
    tag.innerText = tags[i];
    tagsContainer.appendChild(tag);
}
    if (media.length > 0){
      myListingMainImage.src = media[0]; 
    }
    
    if (bids.length > 0){
      const bidLength = bids.length - 1;
      const currentBid = bids[bidLength].amount;
      myListingStandingBid.innerHTML = currentBid + " Credits";
    }    

    myListingName.innerText = name;
    myListingTitle.textContent = title;
    myListingDescription.innerHTML = description;
    myListingBidEnds.innerHTML = formatedEndDate;

    getBidHistory();

  } catch (error) {
    userListing.innerHTML = "An error occured!";
  }
}



export async function getBidHistory() {
  const response = await authFetch(url);
    const listing = await response.json();
    console.log(listing)
    const bids = listing.bids;
    console.log(bids.length);
    bids.sort((a, b) => new Date(b.created) - new Date(a.created));
    const container = document.getElementById("bidHistory");

    for (let i = 0; i < bids.length; i++) {
    const amount = bids[i].amount;
    const name = bids[i].bidderName;
    const date = new Date (bids[i].created);

    let formatedDate = date.toLocaleString("fr-FR", dateOptions);

      const bidHistoryBox = document.createElement("li");
      bidHistoryBox.classList.add ('py-3', 'sm:py-4', 'border-b-2');

        bidHistoryBox.innerHTML = `
        <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-bold">
                           ${name}
                        </p>
  
                        <span class="text-sm font-medium flex">
                        ${formatedDate}
                        </span>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold">
                    ${amount}
                    </div>
                </div>
        `;

      container.appendChild(bidHistoryBox);
    }
}
