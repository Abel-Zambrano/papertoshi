import styled from "styled-components";
import Link from "next/link";
import links from "../../data/links";

const MyNavLinks = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 400px;

  .nav-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    list-style: none;

    &__item {
      display: flex;
      justify-content: start;
      align-items: center;
      font-size: 1.6rem;
      color: var(--gray);
      text-transform: capitalize;
      height: 60px;
      transition: background-color 0.3s;

      &:hover,
      :active {
        background-color: var(--slate-light);
      }
      /* &:active {
        background-color: var(--slate-light);
      } */
    }

    &__logo {
      margin-left: 30px;
    }

    &__link {
      margin-left: 12px;
    }
  }
`;

const NextLink = styled(Link)`
  margin-left: 12px;
`;

export default function NavLinks() {
  return (
    <MyNavLinks>
      <ul className="nav-list">
        {links.map(({ id, name, url, logo }) => {
          return (
            <li key={id} className="nav-list__item">
              <div className="nav-list__logo">{logo}</div>
              <NextLink href={url}>
                <a className="nav-list__link">{name}</a>
              </NextLink>
            </li>
          );
        })}
      </ul>
    </MyNavLinks>
  );
}
