import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import searchFocusReducer from "./searchFocusReducer";

const allReducers = combineReducers({
  search: searchReducer,
  searchFocus: searchFocusReducer,
});

export default allReducers;
