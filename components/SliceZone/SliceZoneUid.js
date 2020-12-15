import React, { Component } from "react";
import styled from "styled-components";
import BodyText from "@components/SliceZone/BodyText";
import Gallery from "@components/SliceZone/Gallery";

const Content = styled.div`
  padding: 100px 0 0 0;
  @media screen and (max-width: 768px) {
    padding: 50px 0 0 0;
  }
`;

export default class SliceZoneUid extends Component {
  render() {
    const { allSlices } = this.props;
    const slice = allSlices.map((s, i) => {
      console.log(allSlices);
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
    return <Content>{slice}</Content>;
  }
}
