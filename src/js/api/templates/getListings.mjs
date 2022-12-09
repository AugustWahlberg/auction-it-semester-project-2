  /**
  * Function to render only the users post
  * @param {object} postDataList
  * @param {const} parent
  */
 
   export function renderListingTemplates(postDataList, parent) {
    parent.append(...postDataList.map((item) => listingTemplate(item, "multiple")));
    console.log();
  }
 
  export function listingTemplate(postData, type) {
    const post = document.createElement("div");
    const id = postData.id;
    const mainImage = postData.media[0];
    const bidEnds = postData.endsAt;
    const timestamp = new Date(bidEnds).getTime();
    const day = new Date(timestamp).getDate();
    const month = new Date(timestamp).getMonth() + 1;
    const year = new Date(timestamp).getFullYear();
    const time = new Date(timestamp).toLocaleTimeString();
    const formatedBidEnds = `${day}/${month}/${year} - ${time}`;
    const title = postData.title;
  
    post.classList.add("post");
    post.setAttribute("id", id);
  
    // if (type === "multiple") {
    //   post.addEventListener("click", (e) => {
    //     // displaySinglePost(postData);
    //   });
    // }
  
    post.innerHTML = `<div class="w-listings-small rounded overflow-hidden shadow-lg m-5">
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
    return post;
  }