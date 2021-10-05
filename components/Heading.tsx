import styled from "styled-components";
import PageTitle from "./PageTitle";
import { useRouter } from "next/router";

const MyHeading = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 35px;
  margin-top: 20px;
  margin-left: 50px;
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
