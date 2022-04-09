const tradeWalletReducer = (
  state = [
    { id: 0, name: "bitcoin", coins: 7 },
    { id: 1, name: "ethereum", coins: 2 },
    { id: 2, name: "bnb", coins: 0 },
    { id: 3, name: "solana", coins: 0 },
    { id: 4, name: "cardano", coins: 1 },
    { id: 5, name: "avalanche", coins: 6 },
    { id: 6, name: "polkadot", coins: 0 },
    { id: 7, name: "dogecoin", coins: 100 },
    { id: 8, name: "polygon", coins: 0 },
    { id: 9, name: "tezos", coins: 25 },
  ],
  action
) => {
  switch (action.type) {
    case "INCREASE_COIN": {
      return state + action.payload;
    }
    case "COIN_DECREASE":
      return state - action.payload;
    default: {
      return state;
    }
  }
};

export default tradeWalletReducer;
