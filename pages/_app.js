import { useState, useEffect } from "react";
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
import Loader from "@components/Loader";
import Social from "@components/Social";
import Contact from "@components/Contact";
import { useMediaQuery } from "@react-hook/media-query";

const GlobalStyles = createGlobalStyle`
    ${reset}
    ${global}
    `;

const NavWrapper = styled(motion.nav)`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  background: var(--secondary);
  z-index: 9999;
  overflow: scroll;
`;

const ContactWrapper = styled(motion.nav)`
  position: fixed;
  width: 50%;
  height: 100%;
  right: 0;
  top: 0;
  bottom: 0;
  background: var(--yellow);
  z-index: 9999;
  overflow: scroll;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const MyApp = ({ Component, pageProps, router }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [loader, setLoader] = useState(true);
  const matches = useMediaQuery("only screen and (min-width: 768px)");

  const apolloClient = new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: PrismicLink({
      uri: process.env.NEXT_PUBLIC_PRISMIC_URL,
    }),
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setMenuOpen(false);
      setContactOpen(false);
    });

    router.events.on("routeChangeComplete", () => {});

    router.events.on("routeChangeError", () => {});
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/lho7obo.css" />
        <link href="static/fonts/fonts.css" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Launched in 2014, Good People Agency is community first and industry second. We credit our success on the relationships we have built with buyers, store owners and brands from California to Christchurch. We don’t work with many brands, but the ones we have chosen, have now become friends. We like to think these brands share our vision, our energy and our commitment to an easy going lifestyle."
        />
        <meta property="og:image" content="/good-people-agency-logo-01.png" />
      </Head>
      <GlobalStyles />
      {/* <Loader
        setMenuOpen={setMenuOpen}
        setLoader={setLoader}
        setContactOpen={setContactOpen}
      /> */}
      <AnimatePresence>
        {menuOpen && (
          <NavWrapper
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
          >
            <Navigation setMenuOpen={setMenuOpen} />
          </NavWrapper>
        )}
        {contactOpen && (
          <ContactWrapper
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
          >
            <Contact setContactOpen={setContactOpen} />
          </ContactWrapper>
        )}
      </AnimatePresence>
      <motion.div
        style={{ position: "relative", overflowX: "hidden" }}
        initial={{ x: 0 }}
        animate={{
          x: menuOpen
            ? "-50%"
            : matches && contactOpen
            ? "-50%"
            : !matches && contactOpen
            ? "-100%"
            : 0,
        }}
        transition={{ duration: 0.4 }}
      >
        <Header
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          contactOpen={contactOpen}
          setContactOpen={setContactOpen}
          router={router}
        />
        <AnimatePresence>
          <motion.main
            key={router.asPath}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <Component
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              loader={loader}
              setLoader={setLoader}
              {...pageProps}
            />
            {router.asPath !== "/showroom" && <Social />}
            {/* <Footer /> */}
          </motion.main>
        </AnimatePresence>
      </motion.div>
    </ApolloProvider>
  );
};

export default MyApp;
