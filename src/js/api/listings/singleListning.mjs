/* Getting API data to Post site*/

import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

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
    const endsAt = listing.endsAt;
    const bids = listing.bids;

    const myListingName = document.getElementById("myListingName");
    const myListingTitle = document.getElementById("myListingTitle");
    const myListingStandingBid = document.getElementById("myListingStandingBid");
    const myListingMainImage = document.getElementById("myListingMainImage");
    const myListingBidEnds = document.getElementById("myListingBidEnds");
    const myListingDescription = document.getElementById("myListingDescription");

    myListingName.innerText = name;
    myListingTitle.textContent = title;
    myListingDescription.innerHTML = description;
    myListingBidEnds.innerHTML = endsAt;

    if (media.length > 0){
      myListingMainImage.src = media; 
    }
    

    if (bids.length > 0){
      const bidLength = bids.length - 1;
      const currentBid = bids[bidLength].amount;
      myListingStandingBid.innerHTML = currentBid + " Credits";
    }    

  } catch (error) {
    userListing.innerHTML = "An error occured!";
  }
}
