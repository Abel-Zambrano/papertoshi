import styled from "styled-components";
import Cryptos from "../components/Cryptos";
import Page from "../components/Page";

const MyPage = styled.div`
  background-color: var(--black-light);
  height: 100vh;
`;

export default function Home() {
  return (
    <>
      <Page>
        <MyPage>
          <h1 style={{ color: "white" }}>Page Content</h1>
          <Cryptos />
        </MyPage>
      </Page>
    </>
  );
}
