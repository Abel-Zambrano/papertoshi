import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Cryptos() {
  const [coins, setCoins] = useState([]);

  const geckoAPI =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";

  const getData = async () => {
    try {
      const response = await axios.get(geckoAPI);
      setCoins(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(coins[0].atl);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Crypto List</h1>
      <div>{}</div>
    </div>
  );
}
