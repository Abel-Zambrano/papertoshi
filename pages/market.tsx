import CryptoList from "../components/CryptoList";
import Page from "../components/Page";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

export default function Market() {
  return (
    <Page>
      <Container>
        <CryptoList />
      </Container>
    </Page>
  );
}
