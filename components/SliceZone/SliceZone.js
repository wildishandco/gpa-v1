import React, { Component } from "react";
import styled from "styled-components";
import BodyText from "@components/SliceZone/BodyText";

const Content = styled.div`
  padding: 100px 0 0 0;
  @media screen and (max-width: 768px) {
    padding: 50px 0 0 0;
  }
`;

export default class SliceZone extends Component {
  render() {
    const { allSlices } = this.props;
    const slice = allSlices.map((s) => {
      switch (s.slice_type) {
        // These are the API IDs of the slices
        case "copy":
          return s.items[0].copy ? <BodyText input={s.items[0].copy} /> : null;
        default:
          return null;
      }
    });
    return <Content>{slice}</Content>;
  }
}
