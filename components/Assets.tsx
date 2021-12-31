import styled from "styled-components";
import { GiMoneyStack } from "react-icons/gi";
import numberFormatter from "../JS/numberFormatter";
import { useSelector } from "react-redux";
import { device } from "../JS/device";

const MyAssets = styled.div`
  height: 60px;
  display: flex;
  align-items: center;

  &.heading-tablet {
    @media ${device.tablet} {
      margin-right: 20px;
    }
  }
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

  .heading-tablet {
    @media ${device.tablet} {
      display: none;
    }
  }
`;

const Cash = styled.p`
  color: var(--white);
  margin-left: 12px;
  @media ${device.tablet} {
    margin-left: 0;
    font-size: 2.5rem;
  }
`;

const Total = styled.p`
  font-size: 1rem;
  margin-left: 12px;
  padding-top: 5px;

  .heading-tablet {
    @media ${device.tablet} {
      display: none;
    }
  }
`;

type AssetsProps = {
  className: string;
};

type Props = {
  assets: number;
  currentAssets: number;
};

export default function Assets({ className }: AssetsProps) {
  const assets = useSelector((state: Props) => state.assets);
  const currentAssets = numberFormatter.format(assets);

  return (
    <MyAssets className={className}>
      <Wrapper>
        <GiMoneyStack className={`icon ${className}`} />
        <Cash>{currentAssets}</Cash>
        <Total className={className}>TOTAL</Total>
      </Wrapper>
    </MyAssets>
  );
}
