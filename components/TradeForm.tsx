import styled from "styled-components";
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
  padding: 10px 0 10px 0;
  border-radius: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 200px;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  font-size: 1.5rem;
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

const TradeButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  height: 30px;
  width: 90px;
  border: none;
  border-radius: 14px;

  &.buy {
    background-color: transparent;
    border: 1px solid var(--green-buy);
    :hover {
      background-color: var(--green-buy);
      color: var(--white);
    }
  }

  &.sell {
    background-color: transparent;
    border: 1px solid var(--red-sell);
    :hover {
      background-color: var(--red-sell);
      color: var(--white);
    }
  }
`;

const ConfirmWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Confirm = styled.button`
  height: 40px;
  width: 100%;
  border: none;
  border-radius: 14px;
  background-color: var(--primary-light);
  color: var(--white);
  :hover {
    background-color: var(--primary);
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
        <Input type="number" onChange={(e) => handleCoinChange(e)} required />
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
      </Form>
    </MyTradeForm>
  );
}
