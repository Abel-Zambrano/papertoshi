import styled from "styled-components";
import Page from "../components/Page";
import Cryptos from "../components/Cryptos";
import { device } from "../JS/device";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  @media ${device.tablet} {
    overflow-y: hidden;
  }
`;

export default function Trade() {
  return (
    <Page>
      <Wrapper>
        <Cryptos />
      </Wrapper>
    </Page>
  );
}
