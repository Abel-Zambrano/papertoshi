import Page from "../components/Page";
import styled from "styled-components";
import Image from "next/image";

const ComingSoon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  padding: 20px;
`;

export default function Portfolio() {
  return (
    <Page>
      <ComingSoon>
        <Title>Portfolio Coming Soon</Title>
        <Image
          src="/portfolio.jpg"
          width="600"
          height="500"
          blurDataURL="/portfolio.jpg"
          placeholder="blur"
        />
      </ComingSoon>
    </Page>
  );
}
