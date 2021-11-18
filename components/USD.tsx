import styled from "styled-components";
import { GiTakeMyMoney } from "react-icons/gi";
import { useSelector } from "react-redux";
import formatter from "../JS/formatter";

const MyUSD = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  color: var(--gray);

  .icon {
    margin-left: 30px;
  }
`;

const Cash = styled.p`
  color: var(--white);
  margin-left: 12px;
`;

const Text = styled.div`
  font-size: 1rem;
  margin-left: 12px;
  padding-top: 5px;
`;

type Props = {
  USD: number;
  currentValue: number;
};

export default function USD() {
  const USD = useSelector((state: Props) => state.USD);
  const currentValue = formatter.format(USD);

  return (
    <MyUSD>
      <Wrapper>
        <GiTakeMyMoney className="icon" />
        <Cash>{currentValue}</Cash>
        <Text>
          <p>USD</p>
        </Text>
      </Wrapper>
    </MyUSD>
  );
}
