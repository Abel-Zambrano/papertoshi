import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { changeAmount, changeValue, USDBuy, getConfirm } from "../actions";

const MyTradeForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 160px;
  padding: 10px 0 10px 0;
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
  const coinTradeAmount = useSelector((state: any) => state.coinTradeAmount);
  const tradeValue = useSelector((state: any) => state.tradeValue);
  const confirm = useSelector((state: any) => state.confirm);
  const dispatch = useDispatch();

  const handleCoinChange = (e: any) => {
    dispatch(changeAmount(e.target.valueAsNumber));
  };

  const handleBuy = (e: any) => {
    e.preventDefault();
    dispatch(changeValue(coinTradeAmount * rawPrice));
    if (tradeValue > USD) {
      alert("Insuffecient Funds");
    } else {
    }
    dispatch(USDBuy(tradeValue));
    dispatch(getConfirm());
  };

  return (
    <MyTradeForm>
      <Form>
        <Input type="number" onChange={(e) => handleCoinChange(e)} />
        {confirm ? (
          <ConfirmWrapper>
            <Confirm>CONFIRM</Confirm>
          </ConfirmWrapper>
        ) : (
          <TradeButtons>
            <Button className="buy" onClick={handleBuy}>
              BUY
            </Button>
            <Button className="sell">SELL</Button>
          </TradeButtons>
        )}
      </Form>
    </MyTradeForm>
  );
}
