import styled from "styled-components";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { GiOctopus } from "react-icons/gi";
import USD from "./USD";
import Assets from "./Assets";

const MySideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 230px;
  min-width: 230px;
  background-color: var(--slate);
  position: sticky;
  top: 0;

  .heading {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 100px;

    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--primary);
      border-radius: 50%;
      padding: 5px;
      margin-left: 20px;
    }

    &__logo {
      color: var(--white);
      font-size: 2.5rem;
      cursor: pointer;
    }

    &__title {
      font-size: 1.9rem;
      color: var(--gray);
      margin-left: 12px;
      cursor: pointer;
    }
  }
`;

const HeadingWrapper = styled.div``;
const LinkWrapper = styled.div``;

const AssetWrapper = styled.div`
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const HR = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export default function SideBar() {
  return (
    <MySideBar>
      <HeadingWrapper>
        <Link href="/" passHref>
          <div className="heading">
            <div className="heading__wrapper">
              <GiOctopus className="heading__logo" />
            </div>
            <h1 className="heading__title">PaperToshi</h1>
          </div>
        </Link>
      </HeadingWrapper>
      <LinkWrapper>
        <NavLinks />
        <HR />
      </LinkWrapper>
      <AssetWrapper>
        <USD />
        <Assets />
      </AssetWrapper>
    </MySideBar>
  );
}
