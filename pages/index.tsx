import styled from "styled-components";
import Cryptos from "../components/Cryptos";
import Page from "../components/Page";

const MyPage = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--black-light);
  height: 100%;
`;

export default function Home() {
  return (
    <>
      <Page>
        <MyPage>
          <Cryptos />
        </MyPage>
      </Page>
    </>
  );
}
