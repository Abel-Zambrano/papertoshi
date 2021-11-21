const coinTradeAmountReducer = (state = 0, action) => {
  switch (action.type) {
    case "CHANGE_AMOUNT":
      return (state = action.payload);
    default: {
      return state;
    }
  }
};

export default coinTradeAmountReducer;
