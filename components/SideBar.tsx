import styled from "styled-components";
import { useDispatch } from "react-redux";
import { closeMenu } from "../actions";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { GiOctopus } from "react-icons/gi";
import USD from "./USD";
import Assets from "./Assets";
import { device } from "../JS/device";
import MobileMenuButton from "./MobileMenuButton";

const MySideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 230px;
  min-width: 230px;
  background-color: var(--slate);
  position: sticky;

  @media ${device.tablet} {
    flex-direction: row;
    width: 100vw;
    min-width: 100vw;
    align-items: center;
  }
  @media ${device.phone} {
    height: 70px;
  }

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
      height: 40px;
      width: 40px;
      border-radius: 50%;
      margin-left: 20px;
      @media ${device.tablet} {
        height: 60px;
        width: 60px;
        flex: 1;
      }
      @media ${device.phone} {
        height: 40px;
        width: 40px;
      }
    }

    &__logo {
      color: var(--white);
      font-size: 2.5rem;
      cursor: pointer;
      @media ${device.tablet} {
        font-size: 4.2rem;
      }
      @media ${device.phone} {
        font-size: 2.5rem;
      }
    }

    &__title {
      font-size: 1.9rem;
      color: var(--white);
      margin-left: 12px;
      cursor: pointer;

      @media ${device.tablet} {
        display: none;
      }
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
  padding-bottom: 30px;

  @media ${device.tablet} {
    flex-direction: row;
    height: 100px;
    padding-bottom: 0;
    align-items: center;
    justify-content: center;
    flex: 6;
  }
`;

const ButtonWrapper = styled.div`
  display: none;

  @media ${device.tablet} {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
  }
`;

const HR = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media ${device.tablet} {
    display: none;
  }
`;

export default function SideBar() {
  const dispatch = useDispatch();

  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };

  return (
    <MySideBar className="mobile-view">
      <HeadingWrapper>
        <Link href="/" passHref>
          <div className="heading" onClick={handleCloseMenu}>
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
        <USD className="no-display" />
        <Assets className="heading-tablet" />
      </AssetWrapper>
      <ButtonWrapper>
        <MobileMenuButton />
      </ButtonWrapper>
    </MySideBar>
  );
}
