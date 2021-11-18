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

export const assetsIncrease = (tradeValue) => {
  return (dispatch) => {
    dispatch({
      type: "INCREASE",
      payload: tradeValue,
    });
  };
};

export const assetsDecrease = (tradeValue) => {
  return (dispatch) => {
    dispatch({
      type: "DECREASE",
      payload: tradeValue,
    });
  };
};
