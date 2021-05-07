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
import FadeIn from "@components/FadeIn";

export default function Home({
  homepage,
  team,
  events,
  menuOpen,
  setMenuOpen,
  loader,
  setLoader,
}) {
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 800);
  // }, []);


  return (
    <>
      <Head>
        <title>Good People Agency</title>
      </Head>
      {/* <AnimatePresence>{loader && <LoaderIndex />}</AnimatePresence> */}
      <HeroSection center>
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
        {/* <h1>
          friends <span className="candice">Not</span> fashion
        </h1> */}
      </HeroSection>
      <FadeIn>
        <Brands brands={homepage.data} />
      </FadeIn>
      <FadeIn>
        {homepage.data.body[0] && (
          <FadeIn>
            <SliceZone allSlices={homepage.data.body} />
          </FadeIn>
        )}
      </FadeIn>
      {team.data.body[0] && (
        <FadeIn>
          <Team team={team} />
        </FadeIn>
      )}
      {events.data.body[0] && (
        <FadeIn>
          <Events events={events} />
        </FadeIn>
      )}
      <FadeIn>
        <ViewBrands
          image={homepage.data.view_brands_image}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      </FadeIn>
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
      contact,
    },
  };
}
