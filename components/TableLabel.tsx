import styled from "styled-components";

const MyTableLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  font-size: 1.2rem;
  color: var(--primary);

  @media screen and (max-width: 750px) {
    font-size: 1rem;
  }
`;

const Text = styled.p`
  &.black {
    color: var(--black-dark);
  }

  &.green {
    color: green;
  }

  &.red {
    color: red;
  }
`;

type LabelProps = {
  className?: string;
  textColor?: any;
  content: string | number;
};

export default function TableLabel({
  className,
  textColor,
  content,
}: LabelProps) {
  return (
    <MyTableLabel className={className}>
      <Text className={textColor}>{content}</Text>
    </MyTableLabel>
  );
}
