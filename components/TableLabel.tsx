import styled from "styled-components";

const MyTableLabel = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  font-size: 1.2rem;
  color: var(--primary-light);
`;

type LabelProps = {
  className?: string;
  content: string | number;
};

export default function TableLabel({ className, content }: LabelProps) {
  return (
    <MyTableLabel className={className}>
      <p className="text">{content}</p>
    </MyTableLabel>
  );
}
