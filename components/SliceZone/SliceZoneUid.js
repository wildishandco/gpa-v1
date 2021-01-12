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
      switch (s.slice_type) {
        // These are the API IDs of the slices
        case "copy":
          return s.primary.copy ? (
            <FadeIn>
              <BodyText key={i} input={s.primary.copy} />
            </FadeIn>
          ) : null;
        case "gallery":
          return s.items[0] ? (
            <FadeIn>
              <Gallery key={i} input={s.items} />
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
