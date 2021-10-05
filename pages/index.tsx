import styled from "styled-components";
import Page from "../components/Page";

const MyPage = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--white);
  height: 100%;
`;

export default function Home() {
  return (
    <>
      <Page>
        <MyPage></MyPage>
      </Page>
    </>
  );
}
