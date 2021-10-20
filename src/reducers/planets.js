import { LOAD_PLANET, RESET_ALL } from "../actions/types";

const INITIAL_STATE = {};

/**
 * *reducer function, use with createStore
 * Loads into / resets root.planets based on action.type 
 * action.payload contains all data for loading new planet.
 * @param {Object} state inital state to be passed to store
 * @param {Object} action =>{type, payload}
 */
function planets(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RESET_ALL:
      return { ...INITIAL_STATE };

    case LOAD_PLANET:
      return {
        ...state,
        [action.payload.id]: { ...action.payload }
      };

    default:
      return state;
  }
}

export default planets;