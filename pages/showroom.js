import { useState } from "react";
import { showroomClient } from "@utils/prismicPosts";
import Prismic from "prismic-javascript";
import PasswordProtect from "@components/Showroom/PasswordProtect";
import ProductGrid from "@components/Showroom/ProductGrid";
import Filter from "@components/Showroom/Filter";
import styled from "styled-components";
import Head from "next/head";

const ShowroomStyles = styled.section`
  display: flex;
  margin-top: 150px;
  position: relative;
  /* height: 100%; */
  min-height: 600px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    /* max-height: none; */
  }
`;

const ShowroomWrapper = styled.div`
  /* max-width: 1400px; */
  margin: auto;
  padding: 0 30px;
`;

export default function Showroom({
  products,
  brands,
  password,
  orderForms,
  products_two,
  products_three,
}) {
  const [brand, setBrand] = useState();

  const combineProducts = products?.results
    .concat(products_two?.results)
    // .concat(products_three?.results);

  // const combineProducts = [...products?.results, ...products_two?.results, ...products_three?.results]

  const sortedProducts = combineProducts.sort((a, b) =>
    a.data.product_name[0].text > b.data.product_name[0].text
      ? 1
      : b.data.product_name[0].text > a.data.product_name[0].text
      ? -1
      : 0
  );

  return (
    <>
      <Head>
        <title>Showroom | Good People Agency</title>
      </Head>
      <PasswordProtect showroomPassword={""}>
        {/* // password.data.password */}
        <ShowroomWrapper>
          <ShowroomStyles>
            <Filter
              brands={brands.results}
              setBrand={setBrand}
              orderForms={orderForms.results}
            />
            <ProductGrid products={sortedProducts} brand={brand} />
          </ShowroomStyles>
        </ShowroomWrapper>
      </PasswordProtect>
    </>
  );
}

export async function getStaticProps() {
  const products = await showroomClient.query(
    Prismic.Predicates.at("document.type", "product"),
    { pageSize: 100, page: 1 }
  );

  const products_two = await showroomClient.query(
    Prismic.Predicates.at("document.type", "product"),
    { pageSize: 100, page: 2 }
  );

  const products_three = await showroomClient.query(
    Prismic.Predicates.at("document.type", "product"),
    { pageSize: 100, page: 3 }
  );

  const brands = await showroomClient.query(
    Prismic.Predicates.at("document.type", "brand"),
    { pageSize: 100, orderings: "[my.brand.uid]" }
  );

  const orderForms = await showroomClient.query(
    Prismic.Predicates.at("document.type", "order_form"),
    { pageSize: 100 }
  );

  const password = await showroomClient.getSingle("password");

  return {
    props: {
      products,
      brands,
      password,
      orderForms,
      products_two,
    },
  };
}
