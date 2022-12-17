import { getListing } from "./singleListning.mjs";
import { bidOnListing } from "../../handlers/bidHandler.mjs";

export function getListingByUser() {
  getListing();
  bidOnListing();
}