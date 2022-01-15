const successReducer = (state = false, action) => {
  switch (action.type) {
    case "SUCCESS_TRUE":
      return (state = true);
    case "SUCCESS_FALSE":
      return (state = false);
    default: {
      return state;
    }
  }
};

export default successReducer;
