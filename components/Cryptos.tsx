import React, { useEffect } from "react";
import axios from "axios";
import TradeList from "./TradeList";
// import TradeLinks from "./TradeLinks"; // todo: remove
import { useDispatch } from "react-redux";
import { loadCoins } from "../actions";

export default function Cryptos() {
  const dispatch = useDispatch();

  const geckoTradeAPI =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Ccardano%2Cbinancecoin%2Cdogecoin%2Cpolkadot%2Csolana%2Cmatic-network%2Ctezos%2Cavalanche-2&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const getData = async () => {
    try {
      const response = await axios.get(geckoTradeAPI);
      dispatch(loadCoins(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <TradeList />
    </>
  );
}
