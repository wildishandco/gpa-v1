import React, { Component } from "react";
import styled from "styled-components";
import BodyText from "@components/SliceZone/BodyText";
import Gallery from "@components/SliceZone/Gallery";
import Wrapper from "@components/Wrapper";
import FadeIn from "@components/FadeIn";

const Content = styled.div``;

export default class SliceZoneUid extends Component {
  render() {
    const { allSlices } = this.props;
    const slice = allSlices.map((s, i) => {
      console.log(s);
      switch (s.slice_type) {
        // These are the API IDs of the slices
        case "copy":
          return s.primary.copy ? (
            <FadeIn key={i}>
              <BodyText input={s.primary.copy} />
            </FadeIn>
          ) : null;
        case "gallery":
          return s.items[0] ? (
            <div style={{ margin: "30px auto" }}>
              <FadeIn key={i}>
                <Gallery input={s.items} />
              </FadeIn>
            </div>
          ) : null;
        case "portrait_gallery":
          return s.items[0] ? (
            <FadeIn key={i}>
              <div style={{ maxWidth: 600, margin: "30px auto" }}>
                <Gallery input={s.items} />
              </div>
            </FadeIn>
          ) : null;
        default:
          return null;
      }
    });
    return (
      <Wrapper>
        <Content>{slice}</Content>
      </Wrapper>
    );
  }
}

// "portrait_gallery"
