import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyTitle = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
  color: var(--white);

  &#primary-light {
    color: var(--primary-light);
  }
`;

type Props = {
  color?: any;
  title: string;
};

export default function Title({ color, title }: Props) {
  return (
    <Div>
      <MyTitle id={color}>{title}</MyTitle>
    </Div>
  );
}
