import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import searchFocusReducer from "./searchFocusReducer";
import USDReducer from "./usdReducer";
import assetsReducer from "./assetsReducer";

const allReducers = combineReducers({
  search: searchReducer,
  searchFocus: searchFocusReducer,
  USD: USDReducer,
  assets: assetsReducer,
});

export default allReducers;
