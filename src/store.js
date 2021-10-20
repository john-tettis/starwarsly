import  { composeWithDevTools} from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import thunk from "redux-thunk";
import root from "./reducers/root";
import { createStore, applyMiddleware } from "redux";

/**
 * defining configuration for redux-persist
 * key-key to be assigned to persistance, should match key on state.
 * storage- type of storage to be persisted through, *local*, session,async, etc,
 * stateReconciler- how should existing storage be merged with default values?
 * automergelevel2 - merge down two levels, leaving all values untouched that are not affected.
 */
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2
};
//creating persisting reducer with config and  root reducer
const persistedReducer = persistReducer(persistConfig, root);

//create stors with persisted reducer with thunk capabilities
export const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

export const persistedStore = persistStore(store);

