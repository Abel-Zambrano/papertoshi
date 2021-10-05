import styled from "styled-components";
import Page from "../components/Page";
import Cryptos from "../components/Cryptos";

const MyPage = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--white);
  height: 100%;
`;

export default function Trade() {
  return (
    <Page>
      <MyPage>
        <Cryptos />
      </MyPage>
    </Page>
  );
}
