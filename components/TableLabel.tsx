import styled from "styled-components";

const MyTableLabel = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  font-size: 1.2rem;
  color: var(--primary-dark);
`;

const Text = styled.p`
  &.white {
    color: var(--white);
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
