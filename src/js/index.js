import { setRegisterFormListener, setLoginFormListener} from "./handlers/index.mjs";
import * as homeModals from "./pages/home/index.mjs";
import { navAction } from "./handlers/navigation.mjs"; 
import * as templates from "./api/templates/getListings.mjs";
import * as listingMethods from "./api/listings/displayListings.mjs";

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