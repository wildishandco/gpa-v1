import Feed from "react-instagram-authless-feed";
import styled from "styled-components";
import Wrapper from "./Wrapper";



const StyledFeed = styled(Feed)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  row-gap: 30px;
  column-gap: 30px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
  a {
    overflow: hidden;
    :last-child {
      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default function InstaFeed() {
  return (
    <StyledFeed
      userName="goodpeopleagency"
      className="Feed"
      classNameLoading="Loading"
      limit="9"
    />
  );
}
