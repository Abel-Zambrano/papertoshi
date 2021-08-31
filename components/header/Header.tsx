import styled from "styled-components";
import Title from "../Title";
import AssetTotal from "./AssetTotal";
import NavLinks from "./NavLinks";
import Link from "next/link";

const MyHeader = styled.nav`
  display: flex;
  justify-content: center;
  background-color: var(--black-dark);
  height: 60px;

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
  }
`;

export default function Header() {
  return (
    <MyHeader>
      <div className="header-container">
        <Link href="/">
          <a>
            <Title color="primary-light" title="Papertoshi" />
          </a>
        </Link>
        <AssetTotal />
        <NavLinks />
      </div>
    </MyHeader>
  );
}
