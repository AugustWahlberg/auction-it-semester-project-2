 /**
  * Function to render only the users post
  * @param {object} userListingDataList
  * @param {const} parent
  */
  export function renderloggedInUserListingTemplates(userListingDataList, parent) {
    parent.append(...userListingDataList.map(loggedInUserListingTemplate));
    console.log();
  }

  
  export function loggedInUserListingTemplate(userListings, type) {
    const listing = document.createElement("div");
    const id = userListings.id;
    let mainImage = userListings.media[0];
    if (userListings.media.length === 0) {
      mainImage = "/src/assets/photos/default-photo-listing.png";
    }
    const bidEnds = userListings.endsAt;
    const timestamp = new Date(bidEnds).getTime();
    const day = new Date(timestamp).getDate();
    const month = new Date(timestamp).getMonth() + 1;
    const year = new Date(timestamp).getFullYear();
    const time = new Date(timestamp).toLocaleTimeString();
    const formatedBidEnds = `${day}/${month}/${year} - ${time}`;
    const title = userListings.title;
  
    listing.classList.add("listing");
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
              <a href="/pages/my-listing/?id=${id}"><button class="see-more-btn" id="seeMoreBtn">See more</button></a>
              </div>
            </div>
          </div>
  `;
    return listing;
  }
