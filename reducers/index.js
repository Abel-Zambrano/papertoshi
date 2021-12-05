import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import searchFocusReducer from "./searchFocusReducer";
import USDReducer from "./usdReducer";
import assetsReducer from "./assetsReducer";
import coinsReducer from "./coinsReducer";
import coinTradeAmountReducer from "./coinTradeAmountReducer";
import tradeValueReducer from "./tradeValueReducer";
import confirmReducer from "./confirmReducer";
import purchaseReducer from "./purchaseReducer";
import tradeLinkReducer from "./tradeLinkReducer";

const allReducers = combineReducers({
  search: searchReducer,
  searchFocus: searchFocusReducer,
  USD: USDReducer,
  assets: assetsReducer,
  coins: coinsReducer,
  coinTradeAmount: coinTradeAmountReducer,
  tradeValue: tradeValueReducer,
  confirm: confirmReducer,
  purchase: purchaseReducer,
  tradeLink: tradeLinkReducer,
});

export default allReducers;
