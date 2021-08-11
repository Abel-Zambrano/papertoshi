import styled from "styled-components";
import Link from "next/link";
import links from "../../data/links";

const MyNavLinks = styled.div`
  display: flex;

  .nav-list {
    display: flex;
    justify-content: space-between;
    list-style: none;

    &-item {
      font-size: 1.2rem;
      color: var(--white);
      text-transform: capitalize;
      margin: 0 10px;
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
              <Link href={url}>
                <a>{name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </MyNavLinks>
  );
}
