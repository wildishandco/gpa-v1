import { client } from "@utils/prismicPosts";
import Prismic from "prismic-javascript";

export default function BrandPage({ data }) {
  console.log(data);
  return <div>Brand page</div>;
}

export async function getStaticProps({ params }) {
  const { uid } = params;
  const { data } = await client.getByUID("brand_page", uid);
  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  const { results } = await client.query(
    Prismic.Predicates.at("document.type", "brand_page")
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
