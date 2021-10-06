import styled from "styled-components";

const MyHeadingTitle = styled.h1`
  text-transform: capitalize;
  padding-left: 50px;
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
