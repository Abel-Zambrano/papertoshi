const usdReducer = (state = 50000, action) => {
  switch (action.type) {
    case "TRADE_BUY":
      return state - action.payload;
    case "TRADE_SELL":
      return state + action.payload;
    default: {
      return state;
    }
  }
};

export default usdReducer;
