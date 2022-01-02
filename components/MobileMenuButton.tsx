import styled from "styled-components";
import { device } from "../JS/device";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../actions";

const MyMobileMenuButton = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
    margin-right: 20px;
    width: 100%;

    &#nav-icon1 {
      width: 60px;
      height: 45px;
      position: relative;
      /* margin: 50px auto; */ // todo: remove
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.5s ease-in-out;
      -moz-transition: 0.5s ease-in-out;
      -o-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out;
      cursor: pointer;

      @media ${device.phone} {
        width: 46px;
      }
    }

    &#nav-icon1 span {
      display: block;
      position: absolute;
      height: 7px;
      width: 100%;
      background: var(--white);
      border-radius: 9px;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;

      @media ${device.phone} {
        height: 4px;
      }
    }

    &#nav-icon1 span:nth-child(1) {
      top: 0px;
      @media ${device.phone} {
        top: 5px;
      }
    }

    &#nav-icon1 span:nth-child(2) {
      top: 18px;
    }

    &#nav-icon1 span:nth-child(3) {
      top: 36px;

      @media ${device.phone} {
        top: 31px;
      }
    }

    &#nav-icon1.open span:nth-child(1) {
      top: 18px;
      -webkit-transform: rotate(135deg);
      -moz-transform: rotate(135deg);
      -o-transform: rotate(135deg);
      transform: rotate(135deg);
      background: var(--primary);
    }

    &#nav-icon1.open span:nth-child(2) {
      opacity: 0;
      left: -60px;
      background: var(--primary);
    }

    &#nav-icon1.open span:nth-child(3) {
      top: 18px;
      -webkit-transform: rotate(-135deg);
      -moz-transform: rotate(-135deg);
      -o-transform: rotate(-135deg);
      transform: rotate(-135deg);
      background: var(--primary);
    }
  }
`;

export default function MobileMenuButton() {
  const mobileMenu = useSelector((state: any) => state.mobileMenu);
  const dispatch = useDispatch();

  return (
    <MyMobileMenuButton
      id="nav-icon1"
      className={`${mobileMenu ? "open" : ""}`}
      onClick={() => {
        dispatch(toggleMenu());
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </MyMobileMenuButton>
  );
}
