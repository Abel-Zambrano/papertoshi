import styled from "styled-components";
import { device } from "../JS/device";

const MyHeadingTitle = styled.h1`
  text-transform: capitalize;
  flex: 1;
  margin-left: 50px;

  @media ${device.tablet} {
    display: none;
  }
`;

type HeadingTitleProps = {
  title: string;
};

export default function PageTitle({ title }: HeadingTitleProps) {
  return (
    <>
      <MyHeadingTitle>{title}</MyHeadingTitle>
    </>
  );
}
