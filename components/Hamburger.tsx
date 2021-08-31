import styled from "styled-components";

const StyledHamburger = styled.button`
  display: none;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    color: var(--color-primary-light);
    justify-content: space-around;
    width: 2rem;
    height: 3rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    &:focus {
      outline: none;
    }
    div {
      width: 4rem;
      height: 0.25rem;
      background: var(--white);
      border-radius: 1rem;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 0.1rem;
    }
  }
`;

export default function Hamburger({}) {
  return (
    <StyledHamburger aria-label="navigation">
      <div />
      <div />
      <div />
    </StyledHamburger>
  );
}
