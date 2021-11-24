import { useState, useEffect } from "react";
import axios from "axios";
import MarketItem from "./MarketItem";
import ListHeader from "./ListHeader";
import { useSelector } from "react-redux";
import wholeNumberFormatter from "../JS/wholeNumberFormatter";
import numberFormatter from "../JS/numberFormatter";

export default function MarketList() {
  const [coins, setCoins] = useState<any[]>([]);
  const search = useSelector((state: any) => state.search);

  const geckoListAPI =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const getData = async () => {
    try {
      const response = await axios.get(geckoListAPI);
      setCoins(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <table>
      <ListHeader />
      <tbody>
        {filteredCoins.map(
          ({
            id,
            image,
            name,
            symbol,
            market_cap_rank,
            current_price,
            price_change_percentage_24h,
            market_cap,
          }) => {
            let currentPrice = numberFormatter.format(current_price);
            // format API percent change to 2 place decimal
            let priceChange24h = Number(
              price_change_percentage_24h / 100
            ).toLocaleString(undefined, {
              style: "percent",
              minimumFractionDigits: 2,
            });
            let marketCap = wholeNumberFormatter.format(market_cap);
            return (
              <MarketItem
                key={id}
                id={id}
                image={image}
                name={name}
                symbol={symbol}
                marketCapRank={market_cap_rank}
                currentPrice={currentPrice}
                priceChange24h={priceChange24h}
                marketCap={marketCap}
              />
            );
          }
        )}
      </tbody>
    </table>
  );
}
