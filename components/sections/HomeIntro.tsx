import styled from "styled-components";
import Image from "next/image";

const MyHomeIntro = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
`;

const Intro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: yellow; //todo */
  height: 160px;
  width: 400px;
  font-size: 2rem;
  letter-spacing: 0.1rem;

  .papertoshi {
    color: var(--primary);
  }
`;

const BitcoinImages = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50%;
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  width: 780px;
`;

const Info = styled.div`
  .info-text {
    font-size: 2.2rem;
    margin-top: 16px;
    letter-spacing: 0.1rem;
  }
`;

export default function HomeIntro() {
  return (
    <MyHomeIntro>
      <TopWrapper>
        <Intro>
          <h1>
            Ape in like the Pros <br /> with{" "}
            <span className="papertoshi">Papertoshi</span>
          </h1>
        </Intro>
        <BitcoinImages>
          <Image
            src="https://live.staticflickr.com/65535/51709063778_03bb9e6213_o.png"
            width="380"
            height="340"
          />
        </BitcoinImages>
      </TopWrapper>
      <BottomWrapper>
        <Summary>
          <Info>
            <p className="info-text">Discover top 100 Cryptos in Market</p>
          </Info>
          <Info>
            <p className="info-text">Paper Trade in 12 Popular Cryptos</p>
          </Info>
          <Info>
            <p className="info-text">See your Portfolio Grow....HODL!!</p>
          </Info>
        </Summary>
        <ChartBackground />
      </BottomWrapper>
    </MyHomeIntro>
  );
}
