import styled from "styled-components";
import Link from "next/link";
import links from "../../data/links";

const MyNavLinks = styled.div`
  display: flex;
`;

const NavLinks = () => {
  return (
    <MyNavLinks>
      <ul className="nav-list">
        {links.map(({ id, name, url }) => {
          return (
            <li key={id} className="nav-list-item">
              <Link href={url}>
                <a>{name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </MyNavLinks>
  );
};

export default NavLinks;
