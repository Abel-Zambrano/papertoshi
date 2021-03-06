import styled from "styled-components";
import Title from "./Title";
import AssetTotal from "./AssetTotal";
import NavLinks from "./NavLinks";
import Link from "next/link";
import Hamburger from "./Hamburger";

const MyHeader = styled.nav`
  display: flex;
  justify-content: center;
  background-color: var(--primary);
  height: 60px;

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;

    @media screen and (max-width: 500px) {
      width: 95vw;
    }
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
        <Hamburger />
      </div>
    </MyHeader>
  );
}
