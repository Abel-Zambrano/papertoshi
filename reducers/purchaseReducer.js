const purchaseReducer = (state = false, action) => {
  switch (action.type) {
    case "PROCESS_PURCHASE":
      return (state = true);
    case "CANCEL_PURCHASE":
      return (state = false);
    default: {
      return state;
    }
  }
};

export default purchaseReducer;
