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
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 200px;
  width: 100%;
`;

const Sign = styled.h3`
  font-size: 1.8rem;
  color: var(--black-light);
`;

const OctoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  .sign-octo {
    color: var(--white);
    font-size: 30rem;
  }
`;

export default function AboutInfo() {
  return (
    <MyAboutInfo>
      <Content>
        <MyLogo />
        <Info>
          Papertoshi is a cyrpto trading simulator. It was designed after stock
          trading simulators also known as “Paper Trading.” Papertoshi was
          designed for informative purposes by providing current data of a
          crypto market, so that a user may practice trading crypto without
          financial risk. All information provided on this site is not financial
          advice nor support any crypto asset portrayed for trading.
        </Info>
        <Info>
          We hope you enjoy trading and using our site to expand your knowledge
          and are welcoming suggestions on improving the site. To submit new
          ideas or suggestions please use the contact page. Thank you, and Ape
          on!
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
