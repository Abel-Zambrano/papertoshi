import styled from "styled-components";
import Backdrop from "./Backdrop";
import Image from "next/image";
import TradeForm from "../TradeForm";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  cancelConfirm,
  changeAmount,
  changeValue,
  closeModal,
} from "../../actions/index";
import { device } from "../../JS/device";

const MyModal = styled.div`
  display: flex;
  position: fixed;
  top: 10%;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
  border-radius: 14px 14px 16px 16px;
  border: 2px solid var(--primary);
  width: 400px;
  height: 600px;
  z-index: 1000;

  @media ${device.phone} {
    top: 0;
    height: 100%;
    border-radius: 0;
    border: none;
  }
`;

const ExitButton = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 30px;

  @media ${device.phone} {
    margin-top: 10px;
    width: 380px;
  }

  .exit-icon {
    font-size: 2.5rem;
    margin: 12px 12px 0 0;
    color: var(--gray);
    :hover {
      color: var(--slate);
    }
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100px;

  @media ${device.phone} {
    margin-top: 60px;
  }

  #image {
    border-radius: 50%;
  }

  .main-heading {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
  }

  .current-price {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 1.8rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  border-radius: 50%;
  background-color: var(--white);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
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
  rawPrice: number;
};

export default function Modal({
  id,
  name,
  image,
  currentPrice,
  tradeModal,
  rawPrice,
}: Props) {
  const dispatch = useDispatch();

  const handleExitModal = () => {
    dispatch(closeModal());
    document.body.style.overflow = "unset";
    dispatch(cancelConfirm());
    dispatch(changeAmount(0));
    dispatch(changeValue(0));
  };

  return (
    <>
      {tradeModal ? (
        <>
          <Backdrop />
          <MyModal key={id} id={id}>
            <ExitButton>
              <AiOutlineCloseCircle
                className="exit-icon"
                onClick={handleExitModal}
              />
            </ExitButton>
            <Heading className="heading">
              <div className="main-heading">
                <LogoWrapper>
                  <Image
                    id="image"
                    src={image}
                    alt={name}
                    width={30}
                    height={30}
                  />
                </LogoWrapper>
                <h1>{`Trade ${name}`}</h1>
              </div>
              <div className="sub-heading">
                <p className="current-price">{currentPrice}</p>
              </div>
            </Heading>
            <TradeForm rawPrice={rawPrice} />
          </MyModal>
        </>
      ) : null}
    </>
  );
}
