import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import CryptoList from "./CryptoList";

const MyCrypto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--black-dark);
  width: 80vw;
  margin: 50px 0;
`;

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

  useEffect(() => {
    getData();
  }, []);

  return (
    <MyCrypto>
      <CryptoList crypto={coins} />
    </MyCrypto>
  );
}
