const confirmReducer = (state = false, action) => {
  switch (action.type) {
    case "GET_CONFIRM": {
      return (state = true);
    }
    case "CANCEL_CONFIRM": {
      return (state = false);
    }
    default: {
      return state;
    }
  }
};

export default confirmReducer;
