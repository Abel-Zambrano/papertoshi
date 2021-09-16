import styled from "styled-components";
import Link from "next/link";
import links from "../../data/links";

const MyNavLinks = styled.div`
  display: flex;

  @media screen and (max-width: 500px) {
    display: none;
  }

  .nav-list {
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 250px;

    &-item {
      font-size: 1.4rem;
      color: var(--white);
      text-transform: capitalize;
    }
  }
`;

export default function NavLinks() {
  return (
    <MyNavLinks>
      <ul className="nav-list">
        {links.map(({ id, name, url }) => {
          return (
            <li key={id} className="nav-list-item">
              <Link href={url}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </MyNavLinks>
  );
}
