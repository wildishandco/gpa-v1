import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import { RichText } from "prismic-reactjs";
import Wrapper from "./Wrapper";
import EventsNewsletter from "./EventsNewsletter";

const handleDragStart = (e) => e.preventDefault();

const EventThumb = styled.div`
  display: flex;
  width: 100%;
  background: #000;
  min-height: 500px;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  .image-container {
    width: 50%;
    height: auto;
    order: 2;
    overflow: hidden;
    position: relative;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 400px;
    }
  }
  .copy {
    width: 50%;
    order: 1;
    padding: 50px;
    color: var(--background);
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    @media screen and (max-width: 480px) {
      padding: 20px;
    }
    .rich-text {
      margin: 30px 0;
    }
  }
`;

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
        <div>SOCIAL LOCKUP TO BE ADDED</div>
      </div>
    </EventThumb>,
  ]);

  return items[1] ? (
    <Wrapper>
      <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoHeight
      />
    </Wrapper>
  ) : (
    <Wrapper>
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
          {/* <div>SOCIAL LOCKUP TO BE ADDED</div> */}
        </div>
      </EventThumb>
    </Wrapper>
  );
}
