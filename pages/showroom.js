import { useState } from "react";
import { showroomClient } from "@utils/prismicPosts";
import Prismic from "prismic-javascript";
import PasswordProtect from "@components/Showroom/PasswordProtect";
import ProductGrid from "@components/Showroom/ProductGrid";
import Filter from "@components/Showroom/Filter";
import Wrapper from "@components/Wrapper";

export default function Showroom({ products, brands }) {
  const [brand, setBrand] = useState();

  return (
    <PasswordProtect>
      <Wrapper>
        <div
          style={{
            display: "flex",
            marginTop: 200,
            position: "relative",
          }}
        >
          <Filter brands={brands.results} setBrand={setBrand} />
          <ProductGrid products={products.results} brand={brand} />
        </div>
      </Wrapper>
    </PasswordProtect>
  );
}

export async function getStaticProps() {
  const products = await showroomClient.query(
    Prismic.Predicates.at("document.type", "product"),
    { pageSize: 100 }
  );
  const brands = await showroomClient.query(
    Prismic.Predicates.at("document.type", "brand"),
    { pageSize: 100, orderings: "[my.brand.uid]" }
  );

  return {
    props: {
      products,
      brands,
    },
  };
}
