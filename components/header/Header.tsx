import styled from "styled-components";

const MyHeader = styled.nav`
  display: flex;
  background-color: blue;

  .header {
    color: red;
  }
`;

type Props = {
  className: string;
  title: string;
};

const Header = ({ className, title }: Props) => {
  return (
    <MyHeader>
      <h1 className={className}>{title}</h1>
    </MyHeader>
  );
};

export default Header;
