const coinsTradeReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_COINS":
      return (state = action.payload);
    default: {
      return state;
    }
  }
};

export default coinsTradeReducer;
