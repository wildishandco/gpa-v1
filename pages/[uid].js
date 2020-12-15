import { client } from "@utils/prismicPosts";
import Prismic from "prismic-javascript";
import Head from "next/head";

export default function BrandPage({ data }) {
  console.log(data);

  return (
    <>
      <Head>
        <title> | Good People Agency</title>
      </Head>
      <div>Brand page</div>
    </>
  );
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
