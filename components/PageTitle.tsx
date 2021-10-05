import styled from "styled-components";

const MyHeadingTitle = styled.h1`
  text-transform: capitalize;
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
