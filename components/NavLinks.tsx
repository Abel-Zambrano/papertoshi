import styled from "styled-components";
import Link from "next/link";
import links from "../data/links";
import { useRouter } from "next/router";
import { device } from "../JS/device";

const MyNavLinks = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 400px;

  @media ${device.tablet} {
    display: none;
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    list-style: none;

    &__item {
      display: flex;
      justify-content: end;
      position: relative;

      &.border-left::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 2px;
        background-color: var(--primary);
        transition: transform 300ms ease-in-out;
        transform: scaleY(0);
      }
    }

    &__wrapper {
      position: relative;
      display: flex;
      justify-content: start;
      align-items: center;
      font-size: 1.6rem;
      color: var(--gray);
      text-transform: capitalize;
      height: 60px;
      width: 228px;
      transition: background-color 400ms ease-in-out;
    }

    &__logo {
      display: flex;
      align-items: center;
      margin-left: 30px;
    }

    &__link {
      margin-left: 12px;
      color: var(--white);
      transition: color 400ms;
    }

    .active {
      border-left: 2px solid var(--primary);
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
              // active styling based on url
              className={
                router.pathname == url
                  ? "nav-list__item active"
                  : "nav-list__item border-left"
              }
            >
              <div className="nav-list__wrapper">
                <div className="nav-list__logo">{logo}</div>
                <NextLink href={url}>
                  <a className="nav-list__link">{name}</a>
                </NextLink>
              </div>
            </li>
          );
        })}
      </ul>
    </MyNavLinks>
  );
}
