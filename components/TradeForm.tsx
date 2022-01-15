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

const Input = styled.input`
  margin-top: 50px;
  width: 200px;
  height: 70px;
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

const TradeValue = styled.p`
  font-size: 2rem;
  padding: 10px;
  margin: 50px;
`;

const BottomPanel = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--slate-light-2);
  width: 100%;
  height: 100%;
  border-radius: 30px 30px 14px 14px;
  box-shadow: 0px -6px 6px rgba(0, 0, 0, 0.2);

  @media ${device.phone} {
    border-radius: 30px 30px 0px 0px;
  }
`;

const TradeButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 200px; */
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

  &.sell {
    margin-top: 40px;
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
  height: 50%;
`;

const ConfirmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 50%;
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

  const handleBuy = (e: any) => {
    e.preventDefault();
    if (tradeValue > USD) {
      alert("Insuffecient Funds");
    } else if (coinTradeAmount !== 0) {
      dispatch(getConfirm());
      dispatch(processPurchase());
    }
  };

  const handleSell = (e: any) => {
    e.preventDefault();
    if (tradeValue > assets) {
      alert("You Don't Own Enough Coins");
    } else if (coinTradeAmount !== 0) {
      dispatch(cancelPurchase());
      dispatch(getConfirm());
    }
  };

  const handleCancel = () => {
    dispatch(cancelConfirm());
    dispatch(cancelPurchase());
    dispatch(successFalse());
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
        <Input
          type="number"
          min="0"
          onChange={(e) => handleCoinChange(e)}
          required
        />
        <TradeValue>
          {currentTradeValue === "$NaN" ? "$0" : currentTradeValue}
        </TradeValue>
        <BottomPanel>
          {confirm ? (
            <SCWrapper>
              <SuccessWrapper>
                {success ? <SuccessCheck /> : null}
              </SuccessWrapper>
              <ConfirmWrapper>
                <Confirm onClick={handleConfirm}>CONFIRM</Confirm>
                <Cancel onClick={handleCancel}>CANCEL</Cancel>
              </ConfirmWrapper>
            </SCWrapper>
          ) : (
            <TradeButtons>
              <Button className="buy" onClick={handleBuy}>
                BUY
              </Button>
              <Button className="sell" onClick={handleSell}>
                SELL
              </Button>
            </TradeButtons>
          )}
        </BottomPanel>
      </Form>
    </MyTradeForm>
  );
}
