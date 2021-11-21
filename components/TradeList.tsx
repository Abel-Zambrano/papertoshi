import { useState } from "react";
import styled from "styled-components";
import TradeItem from "./TradeItem";

const MyCryptoList = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 100vh;
  overflow: scroll;
  /* margin-bottom: 100px; */
`;

type CryptoProps = {
  crypto: any;
};

type ListProps = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: any;
  price_change_percentage_24h: number;
  market_cap: number;
};

export default function TradeList({ crypto }: CryptoProps) {
  const [cash, setCash] = useState(10000);

  // format API value to whole USD
  // const wholeFormatter = new Intl.NumberFormat("en-US", {
  //   style: "currency",
  //   currency: "USD",
  //   maximumFractionDigits: 2,
  // });

  // format API value to USD
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let formatCash = formatter.format(cash);

  return (
    <>
      <MyCryptoList>
        {crypto.map(
          ({
            id,
            symbol,
            name,
            image,
            current_price,
            price_change_percentage_24h,
          }: ListProps) => {
            let currentPrice = formatter.format(current_price);
            // format API percent change to 2 place decimal
            let priceChange24h = Number(
              price_change_percentage_24h / 100
            ).toLocaleString(undefined, {
              style: "percent",
              minimumFractionDigits: 2,
            });
            return (
              <TradeItem
                key={symbol}
                id={id}
                symbol={symbol}
                image={image}
                name={name}
                priceChange24Hr={priceChange24h}
                currentPrice={currentPrice}
                rawPrice={current_price}
              />
            );
          }
        )}
      </MyCryptoList>
    </>
  );
}
