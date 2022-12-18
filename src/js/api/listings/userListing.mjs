import { getListing } from "./singleListning.mjs";
import { bidOnListing } from "../../handlers/bidHandler.mjs";

/**
 * Calls the `getListing` function to get the data for a single listing and the `bidOnListing` function to handle bidding on the listing.
 */
 export function getListingByUser() {
  getListing();
  bidOnListing();
}
