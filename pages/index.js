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
          <ImageOverlay />
        </div>
        <h1>
          friends <span className="candice">Not</span> fashion
          {/* <form method="get" action={homepage.data.pdf.url} target="_blank">
            <button type="submit">Download!</button>
          </form> */}
        </h1>
      </HeroSection>
      {homepage.data.body && <SliceZone allSlices={homepage.data.body} />}
      {events && <Events events={events} />}
      {team && <Team team={team} />}
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
