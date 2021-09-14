import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import CryptoList from "./CryptoList";

const MyCryptos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--off-white);
  width: 80vw;
  margin: 50px 0;

  @media screen and (max-width: 500px) {
    width: 100vw;
  }
`;

export default function Cryptos() {
  const [coins, setCoins] = useState([]);

  const geckoAPI =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Ccardano%2Cbinancecoin%2Cripple%2Cdogecoin%2Cpolkadot%2Csolana%2Cchainlink%2Clitecoin%2Cmatic-network%2Ctezos%2Camp-token%2Cstellar&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const getData = async () => {
    try {
      const response = await axios.get(geckoAPI);
      setCoins(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MyCryptos>
      <CryptoList crypto={coins} />
    </MyCryptos>
  );
}
