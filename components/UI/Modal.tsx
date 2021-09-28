import { useState } from "react";
import styled from "styled-components";
import Backdrop from "./Backdrop";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

const MyModal = styled.div`
  position: fixed;
  top: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);
  border-radius: 16px;
  display: flex;
  width: 600px;
  height: 300px;
  z-index: 1000;

  h1 {
    font-size: 2.2rem;
    font-weight: 300;
  }

  h2 {
    font-weight: 300;
  }

  .wrapper-exit {
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    height: 30px;

    &-icon {
      width: auto;
      height: 50%;
      padding-right: 10px;
      color: var(--black-light);
    }
  }

  .heading {
    text-align: center;
    width: 100%;

    &-title {
      padding-bottom: 10px;
    }

    &-symbol {
      text-transform: uppercase;
    }
  }

  .trade {
    display: flex;
    justify-content: space-around;
    width: 80%;
    padding: 10px;

    &-logo {
      border-radius: 50%;
      border: 0.5px solid rgba(0, 0, 0, 0.1);
      box-shadow: 2px 2px 4px 0.5px rgba(0, 0, 0, 0.2);
      height: 30px;
      width: 30px;
    }

    #image {
      border-radius: 50%;
    }
  }

  .action {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-left: 10px;
  }

  .assets {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;
  }
`;

const Button = styled.button`
  border: none;
  text-align: center;
  width: 160px;
  margin: 10px;
  padding: 10px 0 10px 0;
  font-size: 1.4rem;
  transition: 0.3s;

  &:hover {
    color: var(--white);
  }

  &:active {
    transform: translateY(-2px);
    box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.2);
  }

  &.buy {
    background-color: #86e57d;

    &:hover {
      background-color: #4cd93f;
    }
  }

  &.sell {
    background-color: #ee8282;

    &:hover {
      background-color: #e74b4b;
    }
  }
`;

type ModalProps = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  currentPrice: any;
  tradeModal: boolean;
  closeModal: any;
};

export default function Modal({
  id,
  symbol,
  name,
  image,
  currentPrice,
  tradeModal,
  closeModal,
}: ModalProps) {
  return (
    <>
      {tradeModal ? (
        <>
          <Backdrop closeModal={closeModal}></Backdrop>
          <MyModal key={id} id={id}>
            <div className="wrapper-exit">
              <AiOutlineClose
                className="wrapper-exit-icon"
                onClick={closeModal}
              />
            </div>
            <div className="heading">
              <h1 className="heading-title">{`You're about to trade ${name}`}</h1>
              <h2 className="heading-symbol">{`${symbol} ${currentPrice}`}</h2>
            </div>
            <div className="trade">
              <div className="trade-logo">
                <Image
                  id="image"
                  src={image}
                  alt={name}
                  width={30}
                  height={30}
                />
              </div>
              <input type="text" />
              <h1>Total: 1,282.34</h1>
            </div>
            <div className="action">
              <Button className="buy">Buy</Button>
              <Button className="sell">Sell</Button>
            </div>
            <div className="assets">
              <h2>
                Cash Available <strong>$10,000</strong>
              </h2>
            </div>
          </MyModal>
        </>
      ) : null}
    </>
  );
}
