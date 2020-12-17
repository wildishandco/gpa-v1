import styled from "styled-components";
import { RichText } from "prismic-reactjs";
import { useQuery, gql } from "@apollo/client";

const FOOTER_QUERY = gql`
  query GetFooter {
    allFooters {
      edges {
        node {
          footer
        }
      }
    }
  }
`;

const FooterStyles = styled.footer`
  background: black;
  color: var(--background);
  text-align: center;
  padding: 30px;
  font-size: 0.8rem;
`;

export default function Footer() {
  const { loading, error, data } = useQuery(FOOTER_QUERY);

  if (loading) return null;
  if (error) return null;

  return (
    <>
      <FooterStyles>
        {RichText.render(data.allFooters.edges[0].node.footer)}
      </FooterStyles>
    </>
  );
}
