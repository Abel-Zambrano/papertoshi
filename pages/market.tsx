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
  overflow-y: scroll;
  overflow-x: hidden;

  @media ${device.tablet} {
    overflow-y: hidden;
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
