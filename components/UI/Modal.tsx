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
  right: 40%;
  left: 40%;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
  border-radius: 14px 14px 16px 16px;
  border: 2px solid var(--primary);
  width: 400px;
  height: 600px;
  z-index: 1000;

  @media ${device.tablet} {
    left: 26%;
  }

  @media ${device.phone} {
    width: 100vw;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    border-radius: 0;
    border: none;
  }
`;

const ExitButton = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  .exit-icon {
    font-size: 2.5rem;
    margin: 20px 20px 0 0;
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
`;

type Props = {
  key: string;
  id: string;
  symbol: string;
  name: string;
  image: string;
  currentPrice: any;
  modalOpen: boolean;
  closeModal?: any; // todo: remove update
  rawPrice: number;
  modalHandler: any;
  cryptoIncreaseHandler: any;
  cryptoDecreaseHandler: any;
  assetIncreaseHandler: any;
  assetDecreaseHandler: any;
};

export default function Modal({
  id,
  name,
  image,
  currentPrice,
  modalOpen,
  rawPrice,
  modalHandler,
  cryptoIncreaseHandler,
  cryptoDecreaseHandler,
  assetIncreaseHandler,
  assetDecreaseHandler,
}: Props) {
  const dispatch = useDispatch();

  const handleExitModal = () => {
    // dispatch(closeModal());
    modalHandler();
    document.body.style.overflow = "unset";
    dispatch(cancelConfirm());
    dispatch(changeAmount(0));
    dispatch(changeValue(0));
  };

  return (
    <>
      {modalOpen ? (
        <>
          <Backdrop modalOpen={modalOpen} modalHandler={modalHandler} />
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
            <TradeForm
              modalHandler={modalHandler}
              rawPrice={rawPrice}
              cryptoIncreaseHandler={cryptoIncreaseHandler}
              cryptoDecreaseHandler={cryptoDecreaseHandler}
              assetIncreaseHandler={assetIncreaseHandler}
              assetDecreaseHandler={assetDecreaseHandler}
            />
          </MyModal>
        </>
      ) : null}
    </>
  );
}
