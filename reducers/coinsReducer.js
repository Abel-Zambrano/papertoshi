const coinsReducer = (state = 0, action) => {
  switch (action.type) {
    case "COIN_INCREASE":
      return state + action.payload;
    case "COIN_DECREASE":
      return state - action.payload;
    default: {
      return state;
    }
  }
};

export default coinsReducer;
