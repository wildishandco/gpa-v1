import { useState } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { PrismicLink } from "apollo-link-prismic";
import Navigation from "@components/Navigation";
import Layout from "@components/Layout";
import Head from "next/head";

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
      {menuOpen && <Navigation />}
      <Layout>
        <Component {...pageProps} menuOpen={menuOpen} />
      </Layout>
    </ApolloProvider>
  );
};

export default MyApp;
