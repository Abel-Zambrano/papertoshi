import { useState } from "react";
import styled from "styled-components";
import Backdrop from "./Backdrop";
import Image from "next/image";

const MyModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: var(--white);
  border-radius: 16px;
  display: flex;
  width: 600px;
  height: 300px;
  z-index: 1000;

  h1 {
    font-size: 2.2rem;
    font-weight: 300;
    padding: 10px;
  }

  h2 {
    font-weight: 300;
  }

  .heading {
    text-align: center;
  }

  .trade {
    display: flex;
    justify-content: space-around;
    width: 80%;
  }

  .action {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
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
  name: string;
  image: string;
  currentPrice: any;
  tradeModal: boolean;
  closeModal: any;
};

export default function Modal({
  id,
  name,
  image,
  currentPrice,
  tradeModal,
  closeModal,
}: ModalProps) {
  return (
    <>
      {tradeModal ? (
        <Backdrop closeModal={closeModal}>
          <MyModal id={id}>
            <div className="heading">
              <h1>{`You're about to trade ${name}`}</h1>
              <h2>{`${id} ${currentPrice}`}</h2>
            </div>
            <div className="trade">
              <div className="trade-logo">
                <Image src={image} alt={name} width={30} height={30} />
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
        </Backdrop>
      ) : null}
    </>
  );
}
