import styled from "styled-components";
import Image from "next/image";
import { IoRocketSharp } from "react-icons/io5";

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
  width: 440px;
  font-size: 2.2rem;
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
  width: 820px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  line-height: 6rem;

  .info-text {
    font-size: 2.4rem;
    margin-left: 10px;
    letter-spacing: 0.1rem;
  }

  .hodl {
    color: var(--primary);
    font-weight: 700;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  border-radius: 50%;
  width: 32px;
  height: 32px;

  .icon {
    font-size: 2rem;
    color: var(--white);
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
            src="/bitcoins.png"
            width="380"
            height="340"
            blurDataURL="/bitcoins.png"
            placeholder="blur"
          />
        </BitcoinImages>
      </TopWrapper>
      <BottomWrapper>
        <Summary>
          <Info>
            <IconWrapper>
              <IoRocketSharp className="icon" />
            </IconWrapper>
            <p className="info-text">Discover Top 100 Cryptos in Market</p>
          </Info>
          <Info>
            <IconWrapper>
              <IoRocketSharp className="icon" />
            </IconWrapper>
            <p className="info-text">Paper Trade in 10 Popular Cryptos</p>
          </Info>
          <Info>
            <IconWrapper>
              <IoRocketSharp className="icon" />
            </IconWrapper>
            <p className="info-text">
              See your Portfolio Grow....
              <span className="hodl">HODL</span>!!
            </p>
          </Info>
        </Summary>
      </BottomWrapper>
    </MyHomeIntro>
  );
}