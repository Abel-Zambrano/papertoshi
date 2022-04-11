import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Modal from "./UI/Modal";
import { useDispatch } from "react-redux";
import { updateCoinAmount } from "../actions";
import { device } from "../JS/device";
import numberFormatter from "../JS/numberFormatter";

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

  @media ${device.phone} {
    width: 94vw;
    height: 140px;
  }

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

      @media ${device.phone} {
        font-size: 2.4rem;
      }
    }

    &-button {
      width: 120px;
      height: 34px;
      border: 1px solid var(--green-action);
      background-color: var(--off-white);
      border-radius: 14px;
      margin-right: 50px;
      transition: 100ms ease-in;

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
  rawPrice: number;
};

export default function TradeItem({
  id,
  symbol,
  image,
  name,
  priceChange24Hr,
  currentPrice,
  rawPrice,
}: ListProps) {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [cryptoAmount, setCryptoAmount] = useState(0);
  const [cryptoAsset, setCryptoAsset] = useState(0);

  const modalHandler = () => {
    setModalOpen(!modalOpen);
    dispatch(updateCoinAmount(cryptoAmount));
  };

  const cryptoIncreaseHandler = (crypto: number) => {
    setCryptoAmount(cryptoAmount + crypto);
  };

  const cryptoDecreaseHandler = (crypto: number) => {
    setCryptoAmount(cryptoAmount - crypto);
  };

  const assetIncreaseHandler = (asset: number) => {
    setCryptoAsset(cryptoAsset + asset);
  };

  const assetDecreaseHandler = (asset: number) => {
    setCryptoAsset(cryptoAsset - asset);
  };

  let currentAsset = numberFormatter.format(cryptoAsset);

  // fix NaN issue
  if (isNaN(cryptoAsset)) {
    setCryptoAsset(0);
  }

  return (
    <>
      {modalOpen ? (
        <Modal
          key={id}
          id={id}
          symbol={symbol}
          name={name}
          image={image}
          currentPrice={currentPrice}
          rawPrice={rawPrice}
          modalOpen={modalOpen}
          modalHandler={modalHandler}
          cryptoIncreaseHandler={cryptoIncreaseHandler}
          cryptoDecreaseHandler={cryptoDecreaseHandler}
          assetIncreaseHandler={assetIncreaseHandler}
          assetDecreaseHandler={assetDecreaseHandler}
        />
      ) : null}
      <MyCryptoItem key={symbol} id={id}>
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
              <h3 className="shares">{cryptoAmount}</h3>
            </div>
            <h2 className="name">{name}</h2>
          </div>
        </div>
        <div className="asset-trade">
          <h2 className="asset-trade-value">{currentAsset}</h2>
          <button className="asset-trade-button" onClick={modalHandler}>
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
