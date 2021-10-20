import { combineReducers } from "redux";
import films from "./films";
import planets from "./planets";
import people from "./people";
//combining all reducers here into one reducer for state=>{films:{},planets;{},people:{}}
export default combineReducers({
  films,
  planets,
  people,
});