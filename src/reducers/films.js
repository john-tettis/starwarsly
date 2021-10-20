import { LOAD_FILM, RESET_ALL } from "../actions/types";

const INITIAL_STATE = {};

/**
 * *reducer function, use with createStore
 * Loads film into / resets root.films based on action.type 
 * action.payload contains all data for loading film.
 * @param {Object} state inital state to be passed to store
 * @param {Object} action =>{type, payload}
 * @returns 
 */
function films(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RESET_ALL:
      return { ...INITIAL_STATE };

    case LOAD_FILM:
      return {
        ...state,
        [action.payload.id]: { ...action.payload }
      };

    default:
      return state;
  }
}

export default films;