import styled from "styled-components";
import Backdrop from "./Backdrop";
import Image from "next/image";
import TradeForm from "../TradeForm";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import formatter from "../../JS/formatter";

const MyModal = styled.div`
  position: fixed;
  top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
  border-radius: 16px;
  display: flex;
  width: 400px;
  height: 600px;
  z-index: 1000;
`;

const ExitButton = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 30px;

  .exit-icon {
    width: auto;
    height: 50%;
    padding-right: 10px;
    color: var(--black-light);
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100px;

  #image {
    border-radius: 50%;
  }

  .main-heading {
    display: flex;
  }

  .title {
    margin-left: 10px;
  }

  .symbol {
    text-transform: uppercase;
    font-weight: 300;
  }
`;

type Props = {
  key: string;
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
}: Props) {
  const USD = useSelector((state: any) => state.USD);
  const currentValue = formatter.format(USD);

  return (
    <>
      {tradeModal ? (
        <>
          <Backdrop closeModal={closeModal}></Backdrop>
          <MyModal key={id} id={id}>
            <ExitButton>
              <AiOutlineClose className="exit-icon" onClick={closeModal} />
            </ExitButton>
            <Heading className="heading">
              <div className="main-heading">
                <div className="logo-wrapper">
                  <Image
                    id="image"
                    src={image}
                    alt={name}
                    width={30}
                    height={30}
                  />
                </div>
                <h1 className="title">{`Trade ${name}`}</h1>
              </div>
              <div className="sub-heading">
                <h2 className="symbol">{`${symbol} ${currentPrice}`}</h2>
              </div>
            </Heading>
            <TradeForm />
          </MyModal>
        </>
      ) : null}
    </>
  );
}
