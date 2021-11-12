import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Image from "next/image";
// import PriceChange from "./PriceChange";
// import { useSelector, useDispatch } from "react-redux";
// import { searchTerm } from "../actions";

// const dispatch = useDispatch();
// const search = useSelector((state: any) => state.search);

const MyCryptoList = styled.ul`
  display: flex;
  border: 0.5px solid var(--gray);
  padding: 10px;
  width: 1000px;

  .container {
    display: flex;
    align-items: center;
    width: 50px;

    .rank {
      font-size: 1.2rem;
      color: var(--slate);
      margin: 0 20px 0 20px;
    }
  }

  .content {
    display: flex;
    align-items: center;
    width: 237px;
    margin-left: 10px;

    .wrapper {
      width: 40px;
    }

    .logo {
      border-radius: 50%;
    }

    .symbol {
      text-transform: uppercase;
      color: var(--slate);
      margin-left: 10px;
    }
  }

  .red {
    color: red;
  }

  .green {
    color: green;
  }
`;

const PrimaryText = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 10px;
`;

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
    <>
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
            <MyCryptoList key={id}>
              <td className="container">
                <p className="rank">{market_cap_rank}</p>
              </td>
              <td className="content">
                <td className="wrapper">
                  <Image
                    className="logo"
                    src={image}
                    alt="hello"
                    width={100}
                    height={100}
                  />
                </td>
                <PrimaryText>{name}</PrimaryText>
                <p className="symbol">{symbol}</p>
              </td>
              <td className="content">
                <PrimaryText>{currentPrice}</PrimaryText>
              </td>
              <td className="content">
                {/* <PriceChange value={priceChange24h} /> */}
              </td>
              <td className="content">
                <PrimaryText className="market-cap">{marketCap}</PrimaryText>
              </td>
            </MyCryptoList>
          );
        }
      )}
    </>
  );
}
