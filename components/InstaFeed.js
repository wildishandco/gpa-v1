import Feed from "react-instagram-authless-feed";
import styled from "styled-components";
import Wrapper from "./Wrapper";

const StyledFeed = styled(Feed)`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  a {
    width: 33%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default function InstaFeed() {
  return (
    <Wrapper>
      <StyledFeed
        userName="goodpeopleagency"
        className="Feed"
        classNameLoading="Loading"
        limit="9"
      />
    </Wrapper>
  );
}
