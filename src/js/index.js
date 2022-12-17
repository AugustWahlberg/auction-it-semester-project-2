import * as homeModals from "./pages/home/index.mjs";
import {setLoginFormListener} from "./handlers/index.mjs";
import { navAction } from "./handlers/navigation.mjs";
import { setRegisterFormListener } from "./handlers/index.mjs";
import * as listingMethods from "./api/listings//index.mjs";
import * as templates from "./api/templates/index.mjs";
import { setAvatarToNav } from "./handlers/navigation.mjs";
import { viewProfile } from "./pages/my-profile/viewProfile.js";
import { updateAvatarListener } from "./handlers/updateAvatarLisener.mjs";
import { setCreateListingListener } from "./handlers/createListing.mjs";
import { getListing } from "./api/listings/singleListning.mjs";
import { deleteListingHandler } from "./handlers/deleteListning.mjs";
import * as viewMyListing from "./pages/view-my-listing/index.js";
import { setEditListingListener } from "./handlers/editListning.mjs";
import { getListingByUser } from "./api/listings/userListing.mjs";


//console.log("imported");

const path = location.pathname;

if (path === "/")  {
    setRegisterFormListener();
    homeModals.registerModalActions();
    setLoginFormListener();
    homeModals.loginModalActions();
    homeModals.visitModalActions();
    }

if (path === "/pages/mylisting/"){
  viewMyListing.deleteModalActions()
  viewMyListing.editModalActions()
}

// Nav action - WORKING

  if (path === "/pages/listings/" || 
  path === "/pages/howitworks/" ||
  path === "/pages/mylisting/" ||
  path === "/pages/myprofile/" ||
  path === "/pages/userlisting/")
  {
    navAction();
  }

  // viewListings - WORKING
async function viewListings() {
  const listings = await listingMethods.getListings();
  const container = document.getElementById("listingsFeed");
  if ( container ) {
    templates.renderListingTemplates(listings, container);
  }

  const searchInput = document.getElementById("search");

  if ( searchInput && container ) {
    searchInput.addEventListener("keyup", (e) => {
      const query = e.target.value.trim().toLowerCase();
      const matchingListings = listings.filter(function(listing) {
        return listing.title.toLowerCase().includes(query);
      });
      container.innerHTML = "";
      if (matchingListings.length > 0) {
        templates.renderListingTemplates(matchingListings, container);
      } else {
        container.innerHTML = "No posts found with that title.";
      }
    });
  }
}

if (path === "/pages/listings/") {
  viewListings();
}


//Display navbar avatar - WORKING
if (path !== "/"  &&  path !== "/"  && localStorage.getItem("token")) {
  setAvatarToNav();
}

// View Profile -WORKING

if (path === "/pages/myprofile/") {
  viewProfile();
}

 // Update Avatar -WORKING
 if (path === "/pages/myprofile/") {
  updateAvatarListener ();
 }

 // Create listing - WORKING

 if (path === "/pages/myprofile/" || path === "/pages/listings/") {
  setCreateListingListener();
}

//Redirect logged in user from homepage - WORKING

if(localStorage.getItem("token") && path === "/") {
  window.location.replace("./pages/listings/");
}


//View logged in user listings - WORKING
async function viewUsersListings () {
  const listings = await listingMethods.fetchLoggedInsListings();
  console.log(listings)
  const container = document.getElementById("profileListings");

  if ( container && listings ) {
    templates.renderloggedInUserListingTemplates (listings, container);
  }
}

if (path === "/pages/myprofile/") {
  viewUsersListings();
}

// Get single listing by logged in user - working
if (path === "/pages/mylisting/") {
  getListing();
}

if (path === "/pages/mylisting/") {
  deleteListingHandler();
}

if (path === "/pages/mylisting/") {
  setEditListingListener();
}

if (path === "/pages/userlisting/") {
  getListingByUser();
}
