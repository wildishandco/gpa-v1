import Head from "next/head";
import { client } from "@utils/prismicPosts";
import Header from "@components/Header";
import Footer from "@components/Footer";
import SliceZone from "@components/SliceZone/SliceZone";
import Image from "next/image";

export default function Home({ homepage }) {
  console.log(homepage.data.body[0]);
  return (
    <div className="container">
      <Head>
        <title>Next + Prismic Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className="posts">
          {homepage.data.body && <SliceZone allSlices={homepage.data.body} />}
          <Image
            src={homepage.data.hero_image.url}
            alt="Image"
            layout="responsive"
            width="200"
            height="200"
          />
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .posts {
          display: flex;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
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
