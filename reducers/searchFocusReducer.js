const searchFocusReducer = (state = false, action) => {
  switch (action.type) {
    case "SEARCH_FOCUS_ON":
      return (state = true);
    case "SEARCH_FOCUS_OFF":
      return (state = false);
    default: {
      return state;
    }
  }
};

export default searchFocusReducer;
