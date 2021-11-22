const assetsReducer = (state = 0, action) => {
  switch (action.type) {
    case "ASSETS_INCREASE":
      return state + action.payload;
    case "ASSETS_DECREASE":
      return state - action.payload;
    default: {
      return state;
    }
  }
};

export default assetsReducer;
