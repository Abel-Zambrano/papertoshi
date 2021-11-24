import styled from "styled-components";
import { GiMoneyStack } from "react-icons/gi";
import numberFormatter from "../JS/numberFormatter";
import { useSelector } from "react-redux";

const MyAssets = styled.div`
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

const Total = styled.p`
  font-size: 1rem;
  margin-left: 12px;
  padding-top: 5px;
`;

type Props = {
  assets: number;
  currentAssets: number;
};

export default function Assets() {
  const assets = useSelector((state: Props) => state.assets);
  const currentAssets = numberFormatter.format(assets);

  return (
    <MyAssets>
      <Wrapper>
        <GiMoneyStack className="icon" />
        <Cash>{currentAssets}</Cash>
        <Total>TOTAL</Total>
      </Wrapper>
    </MyAssets>
  );
}
