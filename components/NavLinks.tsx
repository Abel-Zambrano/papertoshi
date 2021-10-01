import styled from "styled-components";
import Link from "next/link";
import links from "../data/links";
import { useRouter } from "next/router";

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
      position: relative;
      display: flex;
      justify-content: start;
      align-items: center;
      font-size: 1.6rem;
      color: var(--gray);
      text-transform: capitalize;
      height: 60px;
      transition: background-color 0.3s;

      &:hover {
        background-color: var(--slate-light);
      }
    }

    &__logo {
      margin-left: 30px;
    }

    &__link {
      margin-left: 12px;
    }

    .active {
      background-color: var(--slate-light);
    }
  }
`;

const NextLink = styled(Link)`
  margin-left: 12px;
`;

export default function NavLinks() {
  const router = useRouter();

  return (
    <MyNavLinks>
      <ul className="nav-list">
        {links.map(({ id, name, url, logo }) => {
          return (
            <li
              key={id}
              // adds active styling based on url
              className={
                router.pathname == url
                  ? "nav-list__item active"
                  : "nav-list__item border-left"
              }
            >
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
