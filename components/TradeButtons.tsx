import styled from "styled-components";

const MyTradeButtons = styled.div`
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

export default function TradeButtons() {
  return (
    <MyTradeButtons>
      <Button className="buy">Buy</Button>
      <Button className="sell">Sell</Button>
    </MyTradeButtons>
  );
}
