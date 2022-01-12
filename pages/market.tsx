import MarketList from "../components/MarketList";
import Page from "../components/Page";
import styled from "styled-components";
import { device } from "../JS/device";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: scroll;

  @media ${device.tablet} {
    overflow: visible;
  }
`;

export default function Market() {
  return (
    <Page>
      <Wrapper>
        <MarketList />
      </Wrapper>
    </Page>
  );
}
