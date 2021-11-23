import styled from "styled-components";
import formatter from "../JS/formatter";
import { useSelector, useDispatch } from "react-redux";
import {
  changeAmount,
  changeValue,
  USDBuy,
  USDSell,
  assetsIncrease,
  getConfirm,
  processPurchase,
  cancelPurchase,
  coinIncrease,
  coinDecrease,
  assetsDecrease,
} from "../actions";

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
  /* margin-top: 120px; */
  background-color: var(--primary);
  width: 100%;
  height: 100%;
  border-radius: 30px 30px 14px 14px;
  box-shadow: 0px -6px 6px rgba(0, 0, 0, 0.2);
`;

const TradeButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
`;

const Button = styled.button`
  height: 40px;
  width: 100%;
  border: none;
  border-radius: 14px;
  transition: all 0.3s ease 0s;

  &.buy {
    background-color: var(--gray);
    border: 1.5px solid var(--gray-light);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.5);

    :hover {
      transform: translateY(-7px);
    }
    :active {
      transform: translateY(-1px);
    }
  }

  &.sell {
    margin-top: 40px;
    background-color: var(--gray);
    border: 1.5px solid var(--gray-light);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.5);

    :hover {
      transform: translateY(-7px);
    }
    :active {
      transform: translateY(-1px);
    }
  }
`;

const ConfirmWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
`;

const Confirm = styled.button`
  height: 40px;
  width: 100%;
  border-radius: 14px;
  background-color: var(--gray);
  border: 1.5px solid var(--gray-light);
  transition: all 0.3s ease 0s;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.5);
  :hover {
    transform: translateY(-7px);
  }
  :active {
    transform: translateY(-1px);
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
  let currentTradeValue = formatter.format(tradeValue);

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

  const handleConfirm = (e: any) => {
    e.preventDefault();
    if (purchase === true) {
      dispatch(coinIncrease(coinTradeAmount));
      dispatch(USDBuy(tradeValue));
      dispatch(assetsIncrease(tradeValue));
    } else if (purchase === false) {
      dispatch(coinDecrease(coinTradeAmount));
      dispatch(assetsDecrease(tradeValue));
      dispatch(USDSell(tradeValue));
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
        <TradeValue>{currentTradeValue}</TradeValue>
        <BottomPanel>
          {confirm ? (
            <ConfirmWrapper>
              <Confirm onClick={handleConfirm}>CONFIRM</Confirm>
            </ConfirmWrapper>
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
