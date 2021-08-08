import Header from "./header/Header";
import Footer from "./footer/Footer";
import styled, { createGlobalStyle } from "styled-components";

export default function Page({ children, className }) {
  return (
    <>
      <Header className={className} />
      <div>{children}</div>
      <Footer />
    </>
  );
}
