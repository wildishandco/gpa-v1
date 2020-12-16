import { useState } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { PrismicLink } from "apollo-link-prismic";
import Navigation from "@components/Navigation";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { createGlobalStyle } from "styled-components";
import reset from "../styles/reset";
import global from "../styles/global";
import InstaFeed from "@components/InstaFeed";

const GlobalStyles = createGlobalStyle`
    ${reset}
    ${global}
    `;

const NavWrapper = styled(motion.nav)`
  position: fixed;
  width: 50%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  background: var(--yellow);
  z-index: 9999;
`;

const MyApp = ({ Component, pageProps }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const apolloClient = new ApolloClient({
    link: PrismicLink({
      uri: "https://good-people-agency.prismic.io/graphql",
    }),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/lho7obo.css" />
        <link href="static/fonts/fonts.css" rel="stylesheet" />
      </Head>
      <GlobalStyles />
      <AnimatePresence>
        {menuOpen && (
          <NavWrapper
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            onClick={() => setMenuOpen(false)}
          >
            <Navigation />
          </NavWrapper>
        )}
      </AnimatePresence>
      <motion.main initial={{ x: 0 }} animate={{ x: menuOpen ? "50%" : 0 }}>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Component {...pageProps} menuOpen={menuOpen} />
        {/* <InstaFeed /> */}
        <Footer />
      </motion.main>
    </ApolloProvider>
  );
};

export default MyApp;
