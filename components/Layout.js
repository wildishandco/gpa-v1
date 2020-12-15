import Header from "./Header";
import Footer from "./Footer";
import { createGlobalStyle } from "styled-components";
import reset from "../styles/reset";
import global from "../styles/global";

const GlobalStyles = createGlobalStyle`
    ${reset}
    ${global}
    `;

export default function Layout({ children, title }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
