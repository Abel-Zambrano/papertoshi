import React, { useState, useEffect } from "react";
import axios from "axios";
import TradeList from "./TradeList";
import TradeLinks from "./TradeLinks";

export default function Cryptos() {
  const [coins, setCoins] = useState([]);

  const geckoTradeAPI =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Ccardano%2Cbinancecoin%2Cripple%2Cdogecoin%2Cpolkadot%2Csolana%2Cchainlink%2Clitecoin%2Cmatic-network%2Ctezos%2Camp-token%2Cstellar&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const getData = async () => {
    try {
      const response = await axios.get(geckoTradeAPI);
      setCoins(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <TradeLinks coins={coins} />
      <TradeList crypto={coins} />
    </>
  );
}
