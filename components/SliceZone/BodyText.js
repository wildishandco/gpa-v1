import { RichText } from "prismic-reactjs";
import styled from "styled-components";

export const BodyContent = styled.div`
  max-width: 780px;
  margin: 60px auto;
  p {
    margin: 30px auto;
  }
`;

const BodyText = ({ input }) => (
  <div className="">{RichText.render(input)}</div>
);

export default BodyText;
