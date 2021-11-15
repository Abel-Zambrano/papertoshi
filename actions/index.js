export const searchCoin = (searchText) => {
  return (dispatch) => {
    dispatch({
      type: "SEARCH_INPUT",
      payload: searchText,
    });
  };
};

export const clearSearch = () => {
  return (dispatch) => {
    dispatch({
      type: "SEARCH_CLEAR",
    });
  };
};

export const focusActive = () => {
  return (dispatch) => {
    dispatch({
      type: "SEARCH_FOCUS_ON",
    });
  };
};

export const focusDeactive = () => {
  return (dispatch) => {
    dispatch({
      type: "SEARCH_FOCUS_OFF",
    });
  };
};
