import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import { RichText } from "prismic-reactjs";
import Wrapper from "./Wrapper";

const handleDragStart = (e) => e.preventDefault();

export default function Events({ events }) {
  const items = events.data.body.map((e, i) => [
    <EventThumb onDragStart={handleDragStart}>
      <div className="image-container">
        <Image
          src={e.primary.event_image.url}
          alt={e.primary.event_image.alt}
          layout="fill"
        />
      </div>
      <div className="copy">
        <h3>{e.primary.event_title[0].text}</h3>
        <div className="rich-text">
          {RichText.render(e.primary.event_details)}
        </div>
        <div className="rich-text">
          {RichText.render(e.primary.event_location)}
        </div>
      </div>
    </EventThumb>,
  ]);

  return items[1] ? (
    <Wrapper>
      <EventHeader>Events</EventHeader>
      <AliceCarousel mouseTracking items={items} disableButtonsControls />
    </Wrapper>
  ) : (
    <Wrapper>
      <EventHeader>Events</EventHeader>
      <EventThumb onDragStart={handleDragStart}>
        <div className="image-container">
          <Image
            src={events.data.body[0].primary.event_image.url}
            alt={events.data.body[0].primary.event_image.alt}
            layout="fill"
          />
        </div>
        <div className="copy">
          <h3>{events.data.body[0].primary.event_title[0].text}</h3>
          <div className="rich-text">
            {RichText.render(events.data.body[0].primary.event_details)}
          </div>
          <div className="rich-text">
            {RichText.render(events.data.body[0].primary.event_location)}
          </div>
        </div>
      </EventThumb>
    </Wrapper>
  );
}
