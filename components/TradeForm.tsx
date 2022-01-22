import { useState } from "react";
import styled from "styled-components";
import numberFormatter from "../JS/numberFormatter";
import { useSelector, useDispatch } from "react-redux";
import { device } from "../JS/device";
import {
  changeAmount,
  changeValue,
  USDBuy,
  USDSell,
  assetsIncrease,
  getConfirm,
  cancelConfirm,
  processPurchase,
  cancelPurchase,
  coinIncrease,
  coinDecrease,
  assetsDecrease,
  successTrue,
  successFalse,
  closeModal,
} from "../actions";
import SuccessCheck from "./UI/SuccessCheck";

const MyTradeForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 10px;
  border-radius: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const TopPanel = styled.div`
  height: 50%;
`;

const Input = styled.input`
  margin-top: 50px;
  width: 200px;
  height: 40px;
  font-size: 2rem;
  text-align: right;

  -moz-appearance: textfield;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const TradeErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 158px;
`;

const TradeValue = styled.p`
  font-size: 2rem;
  padding: 10px;
  margin-top: 20px;
`;

const Error = styled.p`
  color: red;
  font-size: 1.6rem;
  text-align: center;
  margin-top: 20px;
`;

const BottomPanel = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--slate-light-2);
  width: 100%;
  height: 100%;
  height: 50%;
  border-radius: 30px 30px 14px 14px;
  box-shadow: 0px -6px 6px rgba(0, 0, 0, 0.2);

  @media ${device.phone} {
    border-radius: 30px 30px 0px 0px;
  }
`;

const TradeButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;

const Button = styled.button`
  height: 40px;
  width: 200px;
  border: none;
  border-radius: 14px;
  transition: all 0.3s ease 0s;
  background-color: var(--primary);
  border: 1.5px solid var(--white);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.5);
  color: white;
  :hover {
    transform: translateY(-7px);
  }
  :active {
    transform: translateY(-1px);
  }

  @media ${device.tablet} {
    :hover {
      transform: translateY(0);
    }
    :active {
      transform: translateY(0);
    }
  }
`;

const SCWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SuccessWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ConfirmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;

const Confirm = styled.button`
  height: 40px;
  width: 200px;
  border-radius: 14px;
  background-color: var(--primary);
  border: 1.5px solid var(--white);
  color: white;
  transition: all 0.3s ease 0s;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.5);
  :hover {
    transform: translateY(-7px);
  }
  :active {
    transform: translateY(-1px);
  }

  @media ${device.tablet} {
    :hover {
      transform: translateY(0);
    }
    :active {
      transform: translateY(0);
    }
  }
`;

const Cancel = styled.button`
  height: 40px;
  width: 200px;
  border-radius: 14px;
  background-color: var(--primary);
  border: 1.5px solid var(--white);
  color: white;
  transition: all 0.3s ease 0s;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.5);
  :hover {
    transform: translateY(-7px);
  }
  :active {
    transform: translateY(-1px);
  }

  @media ${device.tablet} {
    :hover {
      transform: translateY(0);
    }
    :active {
      transform: translateY(0);
    }
  }
`;

type Props = {
  rawPrice: number;
};

export default function TradeForm({ rawPrice }: Props) {
  const [errorOutput, setErrorOutput] = useState("");
  const USD = useSelector((state: any) => state.USD);
  const assets = useSelector((state: any) => state.assets);
  const coinTradeAmount = useSelector((state: any) => state.coinTradeAmount);
  const tradeValue = useSelector((state: any) => state.tradeValue);
  const confirm = useSelector((state: any) => state.confirm);
  const purchase = useSelector((state: any) => state.purchase);
  const dispatch = useDispatch();
  const success = useSelector((state: any) => state.success);

  let currentTradeValue = numberFormatter.format(tradeValue);

  const handleCoinChange = (e: any) => {
    dispatch(changeAmount(e.target.valueAsNumber));
    dispatch(changeValue(e.target.valueAsNumber * rawPrice));
  };

  // fix NaN issue for coinTradeAmount
  if (isNaN(coinTradeAmount)) {
    dispatch(changeAmount(0));
  }

  const handleBuy = (e: any) => {
    e.preventDefault();
    if (tradeValue > USD) {
      setErrorOutput("Insufficient Funds");
    } else if (coinTradeAmount !== 0) {
      dispatch(getConfirm());
      dispatch(processPurchase());
    }
  };

  const handleSell = (e: any) => {
    e.preventDefault();
    if (tradeValue > assets) {
      setErrorOutput("Insufficient Assets");
    } else if (coinTradeAmount !== 0) {
      dispatch(cancelPurchase());
      dispatch(getConfirm());
    }
  };

  const handleCancel = () => {
    dispatch(cancelConfirm());
    dispatch(cancelPurchase());
    dispatch(successFalse());
    document.body.style.overflow = "unset";
  };

  const handleSuccessExit = () => {
    setTimeout(() => {
      handleCancel();
      dispatch(closeModal());
    }, 3000);
  };

  const handleConfirm = (e: any) => {
    e.preventDefault();
    if (purchase === true) {
      dispatch(coinIncrease(coinTradeAmount));
      dispatch(USDBuy(tradeValue));
      dispatch(assetsIncrease(tradeValue));
      dispatch(successTrue());
      handleSuccessExit();
    } else if (purchase === false) {
      dispatch(coinDecrease(coinTradeAmount));
      dispatch(assetsDecrease(tradeValue));
      dispatch(USDSell(tradeValue));
      dispatch(successTrue());
      handleSuccessExit();
    }
  };

  return (
    <MyTradeForm>
      <Form>
        <TopPanel>
          <Input
            type="number"
            min="0"
            onChange={(e) => handleCoinChange(e)}
            required
            onClick={() => {
              setErrorOutput("");
            }}
          />
          <TradeErrorWrapper>
            <TradeValue>
              {currentTradeValue === "$NaN" ? "$0" : currentTradeValue}
            </TradeValue>
            <Error>{errorOutput}</Error>
          </TradeErrorWrapper>
        </TopPanel>
        <BottomPanel>
          {confirm ? (
            <SCWrapper>
              {success ? (
                <SuccessWrapper>
                  <SuccessCheck />
                </SuccessWrapper>
              ) : (
                <ConfirmWrapper>
                  <Confirm onClick={handleConfirm}>CONFIRM</Confirm>
                  <Cancel onClick={handleCancel}>CANCEL</Cancel>
                </ConfirmWrapper>
              )}
            </SCWrapper>
          ) : (
            <TradeButtons>
              <Button onClick={handleBuy}>BUY</Button>
              <Button onClick={handleSell}>SELL</Button>
            </TradeButtons>
          )}
        </BottomPanel>
      </Form>
    </MyTradeForm>
  );
}
