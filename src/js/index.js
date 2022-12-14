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
import * as myProfileMOdal from "./pages/my-profile/index.mjs";
import { contactUsModal } from "./pages/how-it-works/index.mjs";
import { informVisiterMsg } from "./pages/my-profile/msg.mjs";
import { removeCreateButton } from "./pages/listings/index.js";

const path = location.pathname;

//Contact us function
if (path === "/pages/howitworks/"){
  contactUsModal();
}

// Removes create listing button if user is not logged in
if (path === "/pages/listings/" && !localStorage.getItem("token")) {
  removeCreateButton();
}

// Modals for homepage. login and register
if (path === "/")  {
    setRegisterFormListener();
    homeModals.registerModalActions();
    setLoginFormListener();
    homeModals.loginModalActions();
    homeModals.visitModalActions();
    }

// Modals for listing by user
if (path === "/pages/mylisting/"){
  viewMyListing.deleteModalActions();
  viewMyListing.editModalActions();
}

// Nav action
  if (path === "/pages/listings/" || 
  path === "/pages/howitworks/" ||
  path === "/pages/mylisting/" ||
  path === "/pages/myprofile/" ||
  path === "/pages/userlisting/")
  {
    navAction();
  }

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

// View all listings
if (path === "/pages/listings/") {
  viewListings();
  myProfileMOdal.createNewModal();
}


//Display navbar avatar
if (path !== "/"  &&  path !== "/"  && localStorage.getItem("token")) {
  setAvatarToNav();
}

// View Profile
if (path === "/pages/myprofile/") {
  viewProfile();
  updateAvatarListener ();
  myProfileMOdal.createNewModal();
  myProfileMOdal.editAvatarModal();
  myProfileMOdal.logOutUser();
  informVisiterMsg();
}


 // Create listing
 if (path === "/pages/myprofile/" || path === "/pages/listings/") {
  setCreateListingListener();
}

//Redirect logged in user from homepage
if(localStorage.getItem("token") && path === "/") {
  window.location.replace("./pages/listings/");
}


//View logged in user listings
async function viewUsersListings () {
  const listings = await listingMethods.fetchLoggedInsListings();
  const container = document.getElementById("profileListings");

  if ( container && listings ) {
    templates.renderloggedInUserListingTemplates (listings, container);
  }
}
// View all listings by logged in user
if (path === "/pages/myprofile/") {
  viewUsersListings();
}

// Get single listing by logged in user
if (path === "/pages/mylisting/") {
  getListing();
}

// Delete listing
if (path === "/pages/mylisting/") {
  deleteListingHandler();
}

// Edit listing
if (path === "/pages/mylisting/") {
  setEditListingListener();
}

//View listing post
if (path === "/pages/userlisting/") {
  getListingByUser();
}
