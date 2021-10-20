import { RESET_ALL } from "./types";

/**
 * action creator to clear all data
 * @returns action => {type:RESET_ALL}
 */
function resetAll() {
  return { type: RESET_ALL }
}


export { resetAll }