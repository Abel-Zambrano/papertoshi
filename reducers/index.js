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
import coinsTradeReducer from "./coinsTradeReducer";
import mobileMenuReducer from "./mobileMenuReducer";
import successReducer from "./successReducer";
import tradeModalReducer from "./tradeModalReducer";

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
  coinsTrade: coinsTradeReducer,
  mobileMenu: mobileMenuReducer,
  success: successReducer,
  tradeModal: tradeModalReducer,
});

export default allReducers;
