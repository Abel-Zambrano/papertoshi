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

export const coinIncrease = (tradeAmount) => {
  return (dispatch) => {
    dispatch({
      type: "INCREASE",
      payload: tradeAmount,
    });
  };
};

export const coinDecrease = (tradeAmount) => {
  return (dispatch) => {
    dispatch({
      type: "DECREASE",
      payload: tradeAmount,
    });
  };
};

export const changeAmount = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "CHANGE_AMOUNT",
      payload: amount,
    });
  };
};

export const changeValue = (value) => {
  return (dispatch) => {
    dispatch({
      type: "CHANGE_VALUE",
      payload: value,
    });
  };
};

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
