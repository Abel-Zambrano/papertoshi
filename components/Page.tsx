import styled, { createGlobalStyle } from "styled-components";
import Heading from "./Heading";
import SideBar from "./SideBar";

const GlobalStyles = createGlobalStyle`
:root {
  --black-dark: rgb(22, 22, 22);
  --black-light: rgb(29, 29, 29);
  --slate: #363740;
  --slate-light: #464853;
  --gray: #A4A6B3;
  --gray-light:  #e3e4e8;
  --white: #ffffff;
  --off-white: #f2f2f2;
  --primary: #3856ff;
  --primary-light:  #8093ff;
  --primary-fade:  #e6e9ff;
  --green-action:   #00e600;

}
html {
    box-sizing: border-box;
    font-size: 62.5%;
    scroll-behavior: smooth;
}
body {
  padding: 0;
  margin: 0;
  height: 100%;
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
  max-height: 100vh;
  overflow: hidden;
`;

const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  width: 100%;
  height: 100vh;
`;

// const Content = styled.div`
//   flex: 1;
//   height: 100%;
// `;

type Props = {
  children?: any;
};

export default function Page({ children }: Props) {
  return (
    <ContainerRow>
      <GlobalStyles />
      <SideBar />
      <ContainerColumn>
        <Heading />
        {children}
      </ContainerColumn>
    </ContainerRow>
  );
}
