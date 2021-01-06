import { useState, useEffect } from "react";
import Head from "next/head";
import { client } from "@utils/prismicPosts";
import SliceZone from "@components/SliceZone/SliceZone";
import Image from "next/image";
import Team from "@components/Team";
import Events from "@components/Events";
import { HeroSection, ImageOverlay } from "./[uid]";
import ViewBrands from "@components/ViewBrands";
import LoaderIndex from "@components/LoaderIndex";
import { AnimatePresence } from "framer-motion";
import Brands from "@components/Brands";

export default function Home({
  homepage,
  team,
  events,
  menuOpen,
  setMenuOpen,
  loader,
  setLoader,
}) {
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 800);
  }, []);

  console.log(homepage);

  return (
    <>
      <Head>
        <title>Good People Agency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence>{loader && <LoaderIndex />}</AnimatePresence>
      <HeroSection>
        <div className="hero-image">
          <Image
            src={homepage.data.hero_image.url}
            alt="Good People Agency"
            layout="fill"
            className="image-container"
          />
          {homepage.data.hero_video.embed_url && (
            <div className="iframe-container">
              <iframe src={homepage.data.hero_video.embed_url} />
            </div>
          )}
          <ImageOverlay />
        </div>
        <h1>
          friends <span className="candice">Not</span> fashion
        </h1>
      </HeroSection>
      {homepage.data.body && <SliceZone allSlices={homepage.data.body} />}
      {events && <Events events={events} />}
      {team && <Team team={team} />}
      <Brands brands={homepage.data} />
      <ViewBrands
        image={homepage.data.view_brands_image}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </>
  );
}

export async function getStaticProps() {
  const homepage = await client.getSingle("homepage");
  const team = await client.getSingle("team");
  const events = await client.getSingle("events");
  return {
    props: {
      homepage,
      team,
      events,
    },
  };
}
