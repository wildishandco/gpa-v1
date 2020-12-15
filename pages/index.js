import Head from "next/head";
import { client } from "@utils/prismicPosts";
import Header from "@components/Header";
import Footer from "@components/Footer";
import SliceZone from "@components/SliceZone/SliceZone";
import Image from "next/image";

export default function Home({ menuOpen, homepage }) {
  console.log(menuOpen);
  return (
    <div className="container">
      <Head>
        <title>Good People Agency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {homepage.data.body && <SliceZone allSlices={homepage.data.body} />}
        <Image
          src={homepage.data.hero_image.url}
          alt="Image"
          layout="responsive"
          width="200"
          height="200"
        />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const homepage = await client.getSingle("homepage");

  return {
    props: {
      homepage,
    },
  };
}
