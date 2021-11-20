import styled from "styled-components";
import TradeButtons from "./TradeButtons";

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
  height: 28px;
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

export default function TradeForm() {
  return (
    <MyTradeForm>
      <Form>
        <Input
          type="number"
          min="1"
          name="USD-trade-amount"
          id="USD-trade-amount"
          placeholder="$0"
        />
        <TradeButtons />
      </Form>
    </MyTradeForm>
  );
}
