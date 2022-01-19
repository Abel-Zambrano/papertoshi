import styled, { createGlobalStyle } from "styled-components";
import Heading from "./Heading";
import SideBar from "./SideBar";
import { device } from "../JS/device";
import MobileNavMenu from "./MobileNavMenu";
import { useSelector } from "react-redux";

const GlobalStyles = createGlobalStyle`
:root {
  --black-dark: rgb(22, 22, 22);
  --black-light: rgb(29, 29, 29);
  --slate: #363740;
  --slate-light: #464853;
  --slate-light-2: #5e5f6e;
  --gray: #A4A6B3;
  --gray-light:  #e3e4e8;
  --white: #ffffff;
  --off-white: #f2f2f2;
  --primary: #3856ff;
  --primary-light:  #8093ff;
  --primary-fade:  #e6e9ff;
  --green-action:   #00e600;
  --green-buy:  #00cc00;
  --red-sell: #cc0000;
  --bitcoin: #f6931a;
}
html {
    box-sizing: border-box;
    font-size: 62.5%;
    scroll-behavior: smooth;
}
body {
  padding: 0;
  margin: 0;
  font-family: 'Mulish', sans-serif;
}
a {
  color: inherit;
  text-decoration: none;
}
* {
  margin: 0;
  padding: 0;
}
*::before,
*::after {
  box-sizing: inherit;
}

input {
  outline: none;
}
`;

const ContainerRow = styled.div`
  display: flex;
  max-width: 100vw;
  max-height: 100vh;

  @media ${device.tablet} {
    overflow-y: scroll;
    max-height: none;
    flex-direction: column;
  }
`;

const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-height: 100vh;
  overflow: hidden; // stays hidden to prevent page nav scroll

  @media ${device.tablet} {
    max-height: none;
    width: 100vw;
  }
`;

type Props = {
  children?: any;
};

export default function Page({ children }: Props) {
  const mobileMenu = useSelector((state: any) => state.mobileMenu);

  return (
    <ContainerRow>
      <GlobalStyles />
      <SideBar />
      <ContainerColumn>
        <MobileNavMenu className={`${mobileMenu ? "visible" : ""}`} />
        <Heading />
        {children}
      </ContainerColumn>
    </ContainerRow>
  );
}
