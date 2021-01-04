import { showroomClient } from "@utils/prismicPosts";
import Prismic from "prismic-javascript";

export default function BrandPage({ brand, products }) {
  console.log(brand, products.results[0].data.brand.uid);
  return (
    <>
      {products.results.map((p) => {
        return (
          <>
            {p.data.brand.uid === brand.uid ? (
              <h1>{brand.data.brand_name}</h1>
            ) : (
              <p>nah</p>
            )}
          </>
        );
      })}
    </>
  );
}

export async function getStaticProps({ params }) {
  const { uid } = params;
  const brand = await showroomClient.getByUID("brand", uid);

  const products = await showroomClient.query(
    Prismic.Predicates.at("document.type", "product")
  );
  return {
    props: {
      brand,
      products,
    },
  };
}

export async function getStaticPaths() {
  const { results } = await showroomClient.query(
    Prismic.Predicates.at("document.type", "brand")
  );

  const paths = results.map((post) => ({
    params: {
      uid: post.uid,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
