import { useState, useEffect } from "react";
import axios from "axios";
import MarketItem from "./MarketItem";
import ListHeader from "./ListHeader";

// import { useSelector, useDispatch } from "react-redux";
// import { searchTerm } from "../actions";

// const dispatch = useDispatch();
// const search = useSelector((state: any) => state.search);

export default function MarketList() {
  const [list, setList] = useState([]);

  const geckoListAPI =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  const getData = async () => {
    try {
      const response = await axios.get(geckoListAPI);
      setList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // format API value to USD
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  // format API value to whole number USD
  const wholeNumberFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  return (
    <table>
      <ListHeader />
      <tbody>
        {list.map(
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
            let currentPrice = formatter.format(current_price);
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
