import styled from "styled-components";
import PageTitle from "./PageTitle";
import { useRouter } from "next/router";

const MyHeading = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  min-height: 100px;
  border-bottom: 1.5px solid var(--gray);
`;

export default function Heading() {
  const router = useRouter();
  const pathName = router.pathname.substr(1);

  return (
    <MyHeading>
      <PageTitle title={pathName} />
    </MyHeading>
  );
}
