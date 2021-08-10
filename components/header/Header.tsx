import styled from "styled-components";
import NavLinks from "./NavLinks";

const MyHeader = styled.nav`
  display: flex;
  background-color: blue;

  .header {
    color: red;
  }
`;

type Props = {
  className?: string;
  title: string;
};

const Header = ({ className, title }: Props) => {
  return (
    <MyHeader>
      <h1 className={className}>{title}</h1>
      <NavLinks />
    </MyHeader>
  );
};

export default Header;
