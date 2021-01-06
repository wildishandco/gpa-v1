import { client } from "@utils/prismicPosts";
import Prismic from "prismic-javascript";
import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import SliceZoneUid from "@components/SliceZone/SliceZoneUid";

export const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 500px;
  position: relative;
  overflow: hidden;
  color: var(--background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    .image-container {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
    }
  }
  .brand-logo {
    display: inline-block;
    position: relative;
    z-index: 2;
    width: 70%;
    padding-top: 30vh;
    max-width: 800px;
    @media screen and (max-width: 768px) {
      width: 90%;
    }
  }
  h2 {
    display: inline-block;
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 30vh 30px 5vh 30px;
  }
  h1 {
    position: relative;
    z-index: 2;
    font-size: 6rem;
    max-width: 375px;
    text-align: center;
    line-height: 0.9;
    padding: 0 30px;
    @media screen and (max-width: 768px) {
      font-size: 4.5rem;
    }
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(43, 43, 43, 0.8);
  opacity: 0.2;
  z-index: 1;
  transition: 0.3s ease;
  :hover {
    opacity: ${(props) => (props.hover ? "0.9" : "0.2")};
  }
`;

export const VisitSection = styled.section`
  width: 100%;
  min-height: 70vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .visit-image {
    z-index: -1;
  }
  .visit-link {
    position: relative;
    z-index: 1;
    font-family: var(--cooper);
    font-size: 3rem;
    color: var(--background);
    padding: 0 30px;
    text-align: center;
    border: none;
    :hover {
      text-decoration: underline;
    }
    @media screen and (max-width: 768px) {
      font-size: 2.2rem;
    }
  }
  button {
    position: relative;
    z-index: 1;
    font-family: var(--cooper);
    font-size: 3rem;
    @media screen and (max-width: 768px) {
      font-size: 2.2rem;
      margin: 0 30px;
    }
  }
`;

export default function BrandPage({ data }) {
  console.log(data);

  return (
    <>
      <Head>
        <title>{data.brand_name[0].text} | Good People Agency</title>
      </Head>
      <HeroSection>
        <div className="hero-image">
          <Image
            src={data.hero_image.url}
            alt={data.hero_image.alt}
            layout="fill"
            className="image-container"
          />
          <ImageOverlay />
        </div>
        <img
          src={data.brand_logo.url}
          alt={data.brand_logo.alt}
          className="brand-logo"
        />
        <h2>{data.tagline[0].text}</h2>
      </HeroSection>
      <SliceZoneUid allSlices={data.body} />
      <VisitSection>
        <Image
          src={data.background_image.url}
          alt={data.background_image.alt}
          layout="fill"
          className="visit-image"
        />
        <ImageOverlay />
        <a
          className="visit-link"
          href={data.brand_website_url.url}
          target="_blank"
        >
          Visit {data.brand_name[0].text}
        </a>
      </VisitSection>
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
