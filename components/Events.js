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
  .social {
    justify-self: flex-end;
    display: inline-block;
    a {
      svg {
        fill: var(--yellow);
        transition: 0.3s ease;
        :hover {
          fill: var(--background);
        }
      }
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
        <div className="social">
          <a href="https://instagram.com/goodpeopleagency" target="_blank">
            <svg width="46.5" height="46.5" viewBox="0 0 46.5 46.5">
              <g id="Group_15" data-name="Group 15">
                <path
                  id="Path_7"
                  data-name="Path 7"
                  d="M659.72,4364.5H636.78a30.1,30.1,0,0,1-4.029-1.149c-4.628-2.019-6.97-5.771-7.75-10.63v-22.941a29.721,29.721,0,0,1,.949-3.56c1.952-4.893,5.765-7.4,10.83-8.22H659.72a30.1,30.1,0,0,1,4.029,1.149c4.628,2.019,6.969,5.773,7.75,10.63v22.941a30.429,30.429,0,0,1-1.151,4.033C668.331,4361.378,664.576,4363.719,659.72,4364.5ZM629.1,4341.146c0,3.578-.051,7.161.012,10.739a8.568,8.568,0,0,0,8.5,8.5q10.636.1,21.275,0a8.538,8.538,0,0,0,8.5-8.492q.1-10.635,0-21.274a8.54,8.54,0,0,0-8.493-8.5q-10.636-.1-21.273,0a8.569,8.569,0,0,0-8.5,8.492C629.052,4334.121,629.1,4337.633,629.1,4341.146Z"
                  transform="translate(-625 -4318)"
                />
                <path
                  id="Path_8"
                  data-name="Path 8"
                  d="M656.356,4337.469a11.892,11.892,0,1,1-11.835-11.9A11.812,11.812,0,0,1,656.356,4337.469Zm-3.964-.021a7.928,7.928,0,1,0-7.965,7.941A8.035,8.035,0,0,0,652.391,4337.449Z"
                  transform="translate(-621.214 -4314.213)"
                />
                <path
                  id="Path_9"
                  data-name="Path 9"
                  d="M654,4326.991a3.2,3.2,0,1,1-3.189-3.2A3.183,3.183,0,0,1,654,4326.991Z"
                  transform="translate(-613.702 -4315.106)"
                />
              </g>
            </svg>
          </a>
        </div>
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
          <div className="social">
            <a href="https://instagram.com/goodpeopleagency" target="_blank">
              <svg width="46.5" height="46.5" viewBox="0 0 46.5 46.5">
                <g id="Group_15" data-name="Group 15">
                  <path
                    id="Path_7"
                    data-name="Path 7"
                    d="M659.72,4364.5H636.78a30.1,30.1,0,0,1-4.029-1.149c-4.628-2.019-6.97-5.771-7.75-10.63v-22.941a29.721,29.721,0,0,1,.949-3.56c1.952-4.893,5.765-7.4,10.83-8.22H659.72a30.1,30.1,0,0,1,4.029,1.149c4.628,2.019,6.969,5.773,7.75,10.63v22.941a30.429,30.429,0,0,1-1.151,4.033C668.331,4361.378,664.576,4363.719,659.72,4364.5ZM629.1,4341.146c0,3.578-.051,7.161.012,10.739a8.568,8.568,0,0,0,8.5,8.5q10.636.1,21.275,0a8.538,8.538,0,0,0,8.5-8.492q.1-10.635,0-21.274a8.54,8.54,0,0,0-8.493-8.5q-10.636-.1-21.273,0a8.569,8.569,0,0,0-8.5,8.492C629.052,4334.121,629.1,4337.633,629.1,4341.146Z"
                    transform="translate(-625 -4318)"
                  />
                  <path
                    id="Path_8"
                    data-name="Path 8"
                    d="M656.356,4337.469a11.892,11.892,0,1,1-11.835-11.9A11.812,11.812,0,0,1,656.356,4337.469Zm-3.964-.021a7.928,7.928,0,1,0-7.965,7.941A8.035,8.035,0,0,0,652.391,4337.449Z"
                    transform="translate(-621.214 -4314.213)"
                  />
                  <path
                    id="Path_9"
                    data-name="Path 9"
                    d="M654,4326.991a3.2,3.2,0,1,1-3.189-3.2A3.183,3.183,0,0,1,654,4326.991Z"
                    transform="translate(-613.702 -4315.106)"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </EventThumb>
    </Wrapper>
  );
}
