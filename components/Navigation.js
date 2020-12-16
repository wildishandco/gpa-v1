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

const NavWrapper = styled.nav`
  position: fixed;
  width: 100%;
  height: 100%;
  background: blue;
`;

export default function Navigation() {
  const { loading, error, data } = useQuery(MENU_QUERY);

  if (loading) return null;
  if (error) return null;

  return (
    <NavWrapper>
      {data.allBrand_pages.edges.map((menuItem, i) => {
        return (
          <Link key={i} href={`/${menuItem.node._meta.uid}`}>
            {RichText.asText(menuItem.node.brand_name)}
          </Link>
        );
      })}
    </NavWrapper>
  );
}
