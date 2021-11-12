import styled from "styled-components";

const MyPrimaryText = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 10px;
`;

type PrimaryTextProps = {
  text: number | string;
};

export default function PrimaryText({ text }: PrimaryTextProps) {
  return <MyPrimaryText>{text}</MyPrimaryText>;
}
