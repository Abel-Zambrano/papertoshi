const coinsReducer = (state = 0, action) => {
  switch (action.type) {
    case "UPDATE_COIN_AMOUNT":
      return (state = action.payload);
    default: {
      return state;
    }
  }
};

export default coinsReducer;
