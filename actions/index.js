// search
export const searchCoin = (searchText) => {
  return (dispatch) => {
    dispatch({
      type: "SEARCH_INPUT",
      payload: searchText,
    });
  };
};

export const clearSearch = () => {
  return (dispatch) => {
    dispatch({
      type: "SEARCH_CLEAR",
    });
  };
};

// searchFocus
export const focusActive = () => {
  return (dispatch) => {
    dispatch({
      type: "SEARCH_FOCUS_ON",
    });
  };
};

export const focusDeactive = () => {
  return (dispatch) => {
    dispatch({
      type: "SEARCH_FOCUS_OFF",
    });
  };
};

// USD
export const USDBuy = (tradeValue) => {
  return (dispatch) => {
    dispatch({
      type: "TRADE_BUY",
      payload: tradeValue,
    });
  };
};

export const USDSell = (tradeValue) => {
  return (dispatch) => {
    dispatch({
      type: "TRADE_SELL",
      payload: tradeValue,
    });
  };
};

// assets
export const assetsIncrease = (tradeValue) => {
  return (dispatch) => {
    dispatch({
      type: "ASSETS_INCREASE",
      payload: tradeValue,
    });
  };
};

export const assetsDecrease = (tradeValue) => {
  return (dispatch) => {
    dispatch({
      type: "ASSETS_DECREASE",
      payload: tradeValue,
    });
  };
};

// coins
export const coinIncrease = (tradeAmount) => {
  return (dispatch) => {
    dispatch({
      type: "COIN_INCREASE",
      payload: tradeAmount,
    });
  };
};

export const coinDecrease = (tradeAmount) => {
  return (dispatch) => {
    dispatch({
      type: "COIN_DECREASE",
      payload: tradeAmount,
    });
  };
};

// coinTradeAmount
export const changeAmount = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "CHANGE_AMOUNT",
      payload: amount,
    });
  };
};

// tradeValue
export const changeValue = (value) => {
  return (dispatch) => {
    dispatch({
      type: "CHANGE_VALUE",
      payload: value,
    });
  };
};

// confirm
export const getConfirm = () => {
  return (dispatch) => {
    dispatch({
      type: "GET_CONFIRM",
    });
  };
};

export const cancelConfirm = () => {
  return (dispatch) => {
    dispatch({
      type: "CANCEL_CONFIRM",
    });
  };
};

// purchase
export const processPurchase = () => {
  return (dispatch) => {
    dispatch({
      type: "PROCESS_PURCHASE",
    });
  };
};

export const cancelPurchase = () => {
  return (dispatch) => {
    dispatch({
      type: "CANCEL_PURCHASE",
    });
  };
};
