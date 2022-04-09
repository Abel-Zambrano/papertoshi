import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Modal from "./UI/Modal";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, openModal } from "../actions";
import { device } from "../JS/device";

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
  const coins = useSelector((state: any) => state.coins);
  const [modalOpen, setModalOpen] = useState(false);

  const modalHandler = () => {
    setModalOpen(!modalOpen);
    console.log(modalOpen);
  };

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
              <h3 className="shares">{coins}</h3>
            </div>
            <h2 className="name">{name}</h2>
          </div>
        </div>
        <div className="asset-trade">
          <h2 className="asset-trade-value">$0</h2>
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
