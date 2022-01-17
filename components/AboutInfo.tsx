import styled from "styled-components";
import Logo from "./Logo";
import { GiOctopus } from "react-icons/gi";
import Link from "next/link";
import { device } from "../JS/device";

const MyAboutInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: scroll;

  @media ${device.phone} {
    overflow: hidden;
    height: 900px;
    min-height: 900px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 800px;
  min-width: 800px;
  height: 900px;
  background-color: var(--off-white);
  margin-top: 300px;
  margin-bottom: 100px;

  @media ${device.phone} {
    min-width: 100vw;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const MyLogo = styled(Logo)`
  margin-top: 10px;

  @media ${device.phone} {
    margin-bottom: 60px;
  }
`;

const Info = styled.p`
  padding: 60px;
  font-size: 1.8rem;
  line-height: 3rem;
  color: var(--black-light);

  @media ${device.phone} {
    font-size: 1.2rem;
    padding: 0 60px 30px 60px;
  }
`;

const Contact = styled.span`
  color: var(--primary);
  cursor: pointer;
`;

const SignWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 200px;
  width: 100%;

  @media ${device.phone} {
    padding-right: 100px;
  }
`;

const Sign = styled.h3`
  font-size: 1.8rem;
  color: var(--black-light);

  @media ${device.phone} {
    font-size: 1.2rem;
  }
`;

const OctoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  .sign-octo {
    color: var(--white);
    font-size: 30rem;

    @media ${device.tablet} {
      font-size: 20rem;
    }

    @media ${device.phone} {
      font-size: 10rem;
      margin-top: 60px;
    }
  }
`;

export default function AboutInfo() {
  return (
    <MyAboutInfo>
      <Content>
        <MyLogo />
        <Info>
          Papertoshi is a cyrpto trading simulator. It was inspired by stock
          trading simulators also known as “Paper Trading.” Papertoshi was
          designed for informative purposes by providing current data of a
          crypto market, so that a user may practice trading crypto without
          financial risk. All information provided on this site is not financial
          advice nor support any crypto asset portrayed for trading.
        </Info>
        <Info>
          We hope you enjoy trading and using our site to expand your knowledge
          and are welcoming suggestions on improving the site. To submit new
          ideas or suggestions please use the{" "}
          <Link href="/contact" passHref>
            <Contact>Contact</Contact>
          </Link>{" "}
          page. Thank you, and Ape on!
        </Info>
        <SignWrapper>
          <Sign>- Papertoshi Team</Sign>
        </SignWrapper>
        <OctoWrapper>
          <GiOctopus className="sign-octo" />
        </OctoWrapper>
      </Content>
    </MyAboutInfo>
  );
}
