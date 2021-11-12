import styled from "styled-components";

const MyPrimaryText = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 10px;

  &.red {
    color: red;
  }

  &.green {
    color: green;
  }
`;

type PrimaryTextProps = {
  text: number | string;
  color?: string;
};

export default function PrimaryText({ text, color }: PrimaryTextProps) {
  return <MyPrimaryText className={color}>{text}</MyPrimaryText>;
}
