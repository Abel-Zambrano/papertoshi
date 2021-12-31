const mobileMenuReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return (state = !state);
    case "OPEN_MENU":
      return (state = true);
    case "CLOSE_MENU":
      return (state = false);
    default: {
      return state;
    }
  }
};

export default mobileMenuReducer;
