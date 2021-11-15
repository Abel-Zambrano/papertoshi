const searchReducer = (state = "", action) => {
  switch (action.type) {
    case "SEARCH_INPUT":
      return (state = action.payload);
    case "SEARCH_CLEAR":
      return (state = "");
    default: {
      return state;
    }
  }
};

export default searchReducer;
