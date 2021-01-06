import React, { Component } from "react";
import styled from "styled-components";
import BodyText from "@components/SliceZone/BodyText";
import Gallery from "@components/SliceZone/Gallery";
import Wrapper from "@components/Wrapper";

const Content = styled.div`

`;

export default class SliceZoneUid extends Component {
  render() {
    const { allSlices } = this.props;
    const slice = allSlices.map((s, i) => {
      switch (s.slice_type) {
        // These are the API IDs of the slices
        case "copy":
          return s.primary.copy ? (
            <BodyText key={i} input={s.primary.copy} />
          ) : null;
        case "gallery":
          return s.items ? <Gallery key={i} input={s.items} /> : null;
        default:
          return null;
      }
    });
    return (
      <Wrapper>
        <Content>{slice}</Content>
      </Wrapper>
    )
  }
}
