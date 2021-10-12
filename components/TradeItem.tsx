import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Modal from "./UI/Modal";

const MyCryptoItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--white);
  list-style: none;
  width: 540px;
  height: 200px;
  border-radius: 16px;
  margin: 20px 0;
  box-shadow: 1px 6px 10px 3px rgba(0, 0, 0, 0.3);

  .container {
    display: flex;
    align-items: center;

    .wrapper {
      display: flex;
      align-items: center;
      margin: 10px 0 10px 10px;

      .heading {
        background-color: var(--primary-fade);
        border-radius: 20px;
        display: flex;
        justify-content: start;
        align-items: center;
        width: 160px;

        .logo {
          border-radius: 50%;
        }

        .shares {
          margin-left: 20px;
        }
      }

      .name {
        margin-left: 10px;
        font-weight: 400;
      }
    }
  }

  .asset-trade {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-value {
      font-size: 5rem;
      font-weight: 200;
      margin-left: 50px;
    }

    &-button {
      width: 120px;
      height: 34px;
      border: 1px solid var(--green-action);
      background-color: var(--off-white);
      border-radius: 14px;
      margin-right: 50px;
      /* transition: 200ms ease-in; */

      &:hover {
        background-color: var(--green-action);
        color: var(--white);
      }
    }
  }

  .asset-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    &-change {
      margin-left: 10px;
    }

    &-current {
      margin-right: 10px;
    }
  }
`;

type ListProps = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  currentPrice: any;
  priceChange24Hr: any;
};

export default function TradeItem({
  id,
  symbol,
  image,
  name,
  priceChange24Hr,
  currentPrice,
}: ListProps) {
  const [tradeModal, setTradeModal] = useState(false);

  const tradeModalHandler = () => {
    setTradeModal(!tradeModal);
    if (tradeModal === false) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <>
      <Modal
        key={id}
        id={id}
        symbol={symbol}
        name={name}
        image={image}
        currentPrice={currentPrice}
        tradeModal={tradeModal}
        closeModal={tradeModalHandler}
      />
      <MyCryptoItem key={symbol}>
        <div className="container">
          <div className="wrapper">
            <div className="heading">
              <Image
                className="logo"
                src={image}
                alt={name}
                width={30}
                height={30}
                priority
              />
              <h3 className="shares">501.10</h3>
            </div>
            <h2 className="name">{name}</h2>
          </div>
        </div>
        <div className="asset-trade">
          <h2 className="asset-trade-value">$1,000</h2>
          <button className="asset-trade-button" onClick={tradeModalHandler}>
            Trade
          </button>
        </div>
        <div className="asset-price">
          <p className="asset-price-change">{priceChange24Hr}</p>
          <p className="asset-price-current">{currentPrice}</p>
        </div>
      </MyCryptoItem>
    </>
  );
}
