import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const BodyContent = styled.div`
  max-width: 780px;
  margin: 0 auto;
  p {
    margin: 45px auto;
  }
`;

const BodyText = ({ input, center }) => (
  <BodyContent style={{ textAlign: center ? "center" : "left" }}>
    {RichText.render(input)}
  </BodyContent>
);

export default BodyText;
