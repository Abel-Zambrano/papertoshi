const tradeLinkReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_LINK":
      return (state = action.payload);
    case "UNSET_LINK":
      return (state = "");
    default: {
      return state;
    }
  }
};

export default tradeLinkReducer;
