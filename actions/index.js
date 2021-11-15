export const searchCoin = (searchText) => {
  return (dispatch) => {
    dispatch({
      type: "SEARCH_INPUT",
      payload: searchText,
    });
  };
};
