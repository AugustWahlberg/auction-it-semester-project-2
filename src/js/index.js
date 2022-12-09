import { setRegisterFormListener, setLoginFormListener} from "./handlers/index.mjs";
import * as homeModals from "./pages/home/index.mjs";
import { navAction } from "./handlers/navigation.mjs"; 
import * as templates from "./api/templates/getListings.mjs";
import * as listingMethods from "./api/listings/displayListings.mjs";
import { setAvatarToNav } from "./handlers/navigation.mjs";

const path = location.pathname;


if (path === "/")  {
homeModals.registerModalActions();
homeModals.loginModalActions();
homeModals.visitModalActions();
setRegisterFormListener();
setLoginFormListener();
}

if (path !== "/") {
  navAction();
}


// VIEW LISTINGS ON FEED

async function viewListings() {
  const listings = await listingMethods.getListings();
  //console.log(posts)
  const container = document.getElementById("listingsFeed");
  templates.renderListingTemplates(listings, container);
  // searchPosts(posts);
  // filterPosts(posts);
}

if (path === "/pages/listings/") {
  viewListings();
}

//DISPLAY NAVBAR AVATAR
if (path !== "/") {
  setAvatarToNav();
}


//REDIRECT USER TO LOGGED IN PAGE IF FROM HOMEPAGE
//THIS ONLY IF THEY HAVE LOGGED IN BEFORE
if(localStorage.getItem("token") && path === "/") {
  window.location.replace("/pages/listings/");
}