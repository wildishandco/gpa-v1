import Header from "./Header";
import Footer from "./Footer";
import { createGlobalStyle } from "styled-components";
import reset from "../styles/reset";
import global from "../styles/global";
import InstaFeed from "./InstaFeed";

const GlobalStyles = createGlobalStyle`
    ${reset}
    ${global}
    `;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <InstaFeed />
      <Footer />
    </>
  );
}
