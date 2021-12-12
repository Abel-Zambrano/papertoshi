import styled from "styled-components";
import Logo from "./Logo";
import { GiOctopus } from "react-icons/gi";

const MyAboutInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 800px;
  height: 900px;
  background-color: var(--off-white);
`;

const MyLogo = styled(Logo)`
  margin-top: 10px;
`;

const Info = styled.p`
  padding: 60px;
  font-size: 1.8rem;
  line-height: 3rem;
  color: var(--black-light);
`;

const SignWrapper = styled.div`
  margin-top: 10px;
  margin-left: 350px;
  /* background-color: yellowgreen; //todo : remove */

  .sign-octo {
    color: var(--white);
    font-size: 30rem;
    margin: 0 -20px -100px 0;
  }
`;

const Sign = styled.h3`
  font-size: 1.8rem;
  color: var(--black-light);
  margin-top: -65px;
  margin-left: 64px;
`;

export default function AboutInfo() {
  return (
    <MyAboutInfo>
      <Content>
        <MyLogo />
        <Info>
          Papertoshi is a cyrpto trading simulator also known as paper trading
          and was designed for informative purposes by providing current data of
          a crypto market, so that a user may practice trading crypto without
          financial risk. All information provided on this site is not financial
          advice nor support any crypto assets portrayed for trading.
        </Info>
        <Info>
          We hope you enjoy trading and using our site to expand your knowledge
          and are welcoming suggestions on improving the site. To submit new
          ideas or suggestions please use the contact page. Thank you, and Ape
          on!
        </Info>
        <SignWrapper>
          <GiOctopus className="sign-octo" />
          <Sign>- Papertoshi Team</Sign>
        </SignWrapper>
      </Content>
    </MyAboutInfo>
  );
}
