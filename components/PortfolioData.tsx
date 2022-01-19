import styled from "styled-components";
import { useSelector } from "react-redux";
import numberFormatter from "../JS/numberFormatter";
import { device } from "../JS/device";

const MyData = styled.div`
  display: flex;
  justify-content: center;
  /* height: 100%;
  width: 100%; */
`;

const Portfolio = styled.div`
  height: 300px;
  width: 500px;
  border-radius: 20px;
  margin-top: 100px;
  box-shadow: 1px 6px 10px 3px rgba(0, 0, 0, 0.3);

  @media ${device.phone} {
    height: 200px;
    width: 360px;
  }
`;

const Container = styled.div`
  display: flex;
  height: 50%;
  width: 100%;

  &.border-bottom {
    border-bottom: 1px solid var(--gray);
  }
`;

const Title = styled.div`
  width: 30%;
  height: 100%;

  h2 {
    background-color: var(--primary);
    color: var(--white);
    font-size: 2rem;
    font-weight: 200;
    text-align: center;
    border-radius: 20px;
    margin: 10px 0 0 20px;
    padding: 4px 0 4px 0;

    @media ${device.phone} {
      font-size: 1rem;
    }
  }
`;

const Amount = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  height: 100%;

  p {
    color: var(--slate);
    font-size: 4rem;
    padding-left: 40px;

    @media ${device.phone} {
      font-size: 2rem;
    }
  }
`;

export default function PortfolioData(): any {
  const USD = useSelector((state: any) => state.USD);
  const assets = useSelector((state: any) => state.assets);
  const USDValue = numberFormatter.format(USD);
  const assetsValue = numberFormatter.format(assets);

  return (
    <MyData>
      <Portfolio>
        <Container className="border-bottom">
          <Title>
            <h2>USD</h2>
          </Title>
          <Amount>
            <p>{USDValue}</p>
          </Amount>
        </Container>
        <Container>
          <Title>
            <h2>ASSETS</h2>
          </Title>
          <Amount>
            <p>{assetsValue}</p>
          </Amount>
        </Container>
      </Portfolio>
    </MyData>
  );
}
