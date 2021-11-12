import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import PrimaryText from "./PrimaryText";

const MyMarketItem = styled.tr`
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

  .data-wrapper {
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
`;

type MarketItemProps = {
  id: string;
  marketCapRank: number;
  image: string;
  name: string;
  symbol: string;
  currentPrice: string;
  marketCap: string;
  priceChange24h: any;
};

export default function MarketItem({
  id,
  marketCapRank,
  image,
  name,
  symbol,
  currentPrice,
  marketCap,
  priceChange24h,
}: MarketItemProps) {
  const [color, setColor] = useState("");
  //   console.log(priceChange24h.charAt(0));

  useEffect(() => {
    if (priceChange24h.charAt(0) === "-") {
      setColor("red");
    } else {
      setColor("green");
    }
  }, []);

  console.log(color);

  return (
    <MyMarketItem key={id}>
      <td className="container">
        <p className="rank">{marketCapRank}</p>
      </td>
      <td className="data-wrapper">
        <td className="wrapper">
          <Image
            className="logo"
            src={image}
            alt="hello"
            width={100}
            height={100}
          />
        </td>
        <PrimaryText text={name} />
        <p className="symbol">{symbol}</p>
      </td>
      <td className="data-wrapper">
        <PrimaryText text={currentPrice} />
      </td>
      <td className="data-wrapper">
        <PrimaryText color={color} text={priceChange24h} />
      </td>
      <td className="data-wrapper">
        <PrimaryText text={marketCap} />
      </td>
    </MyMarketItem>
  );
}
