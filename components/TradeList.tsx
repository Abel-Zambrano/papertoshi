import styled from "styled-components";
import TradeItem from "./TradeItem";
import { useSelector } from "react-redux";
import numberFormatter from "../JS/numberFormatter";
import { device } from "../JS/device";

const MyCryptoList = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 100vh;
  overflow: scroll;

  @media ${device.tablet} {
    overflow: visible;
  }
`;

type ListProps = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: any;
  price_change_percentage_24h: number;
  market_cap: number;
};

export default function TradeList() {
  const tradeLink = useSelector((state: any) => state.tradeLink);
  const coinsTrade = useSelector((state: any) => state.coinsTrade);

  const filteredCoinsTrade = coinsTrade.filter((coin: any) =>
    coin.name.includes(tradeLink)
  );

  return (
    <>
      <MyCryptoList>
        {filteredCoinsTrade.map(
          ({
            id,
            symbol,
            name,
            image,
            current_price,
            price_change_percentage_24h,
          }: ListProps) => {
            let currentPrice = numberFormatter.format(current_price);
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
