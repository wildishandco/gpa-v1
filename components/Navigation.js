import styled from "styled-components";
import { RichText } from "prismic-reactjs";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";

const MENU_QUERY = gql`
  query GetMenu {
    allBrand_pages {
      edges {
        node {
          brand_name
          _meta {
            uid
          }
        }
      }
    }
  }
`;

const NavInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  padding: 60px;
  a {
    margin: 1rem 0;
    color: var(--background);
    font-family: var(--cooper);
    text-decoration: none;
    transition: 0.3s ease;
    :hover {
      text-decoration: underline;
    }
  }
`;

export default function Navigation() {
  const { loading, error, data } = useQuery(MENU_QUERY);

  if (loading) return null;
  if (error) return null;

  return (
    <NavInner>
      <Link href="/">Home</Link>
      {data.allBrand_pages.edges.map((menuItem, i) => {
        return (
          <Link key={i} href={`/${menuItem.node._meta.uid}`}>
            {RichText.asText(menuItem.node.brand_name)}
          </Link>
        );
      })}
    </NavInner>
  );
}
