import { useState } from "react";
import styled from "styled-components";
import Title from "./Title";
import TradeItem from "./TradeItem";

const MyCryptoList = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
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

export default function CryptoTrade({ crypto }: CryptoProps) {
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
        <Title color="black" title={`Cash Available: ${formatCash} USD`} />
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
                id={id}
                symbol={symbol}
                image={image}
                name={name}
                priceChange24Hr={priceChange24h}
                currentPrice={currentPrice}
              />
            );
          }
        )}
      </MyCryptoList>
    </>
  );
}
