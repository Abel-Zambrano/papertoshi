import styled from "styled-components";
import Title from "../Title";
import AssetTotal from "./AssetTotal";
import NavLinks from "./NavLinks";

const MyHeader = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--black-dark);
  height: 60px;
`;

export default function Header() {
  return (
    <MyHeader>
      <Title color="primary-light" title="Papertoshi" />
      <AssetTotal />
      <NavLinks />
    </MyHeader>
  );
}
