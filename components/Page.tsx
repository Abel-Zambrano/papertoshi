import styled, { createGlobalStyle } from "styled-components";
// import Header from "./header/Header";
// import Footer from "./footer/Footer";
import SideBar from "./SideBar";

const GlobalStyles = createGlobalStyle`
:root {
  --black-dark: rgb(22, 22, 22);
  --black-light: rgb(29, 29, 29);
  --slate: #363740;
  --gray: #A4A6B3;
  --white: #ffffff;
  --off-white: #f2f2f2;
  --primary: #3856ff;
  --primary-medium: #8f80e5;
  --primary-light: #eceafb;
  --green-action: #47d147;
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
`;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  overflow: hidden;
`;

const Content = styled.div`
  flex: 1;
`;

type Props = {
  children?: any;
};

export default function Page({ children }: Props) {
  return (
    <Container>
      <GlobalStyles />
      <SideBar />
      <Content>{children}</Content>
    </Container>
  );
}
