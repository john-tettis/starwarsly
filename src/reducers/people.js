import { LOAD_PERSON, RESET_ALL } from "../actions/types";

const INITIAL_STATE = {};

/**
 * *reducer function, use with createStore
 * Loads into / resets root.people based on action.type 
 * action.payload contains all data for loading person.
 * @param {Object} state inital state to be passed to store
 * @param {Object} action =>{type, payload}
 */
function people(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RESET_ALL:
      return { ...INITIAL_STATE };

    case LOAD_PERSON:
      return {
        ...state,
        [action.payload.id]: { ...action.payload }
      };

    default:
      return state;
  }
}

export default people;