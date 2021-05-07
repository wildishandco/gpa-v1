import React from "react";
import styled from "styled-components";
import { RichText } from "prismic-reactjs";
import { useQuery, gql } from "@apollo/client";
import ContactForm from "./ContactForm";
import Link from "next/link";

const CONTACT_QUERY = gql`
  query GetContact {
    allContacts {
      edges {
        node {
          contact
          wholesale_form {
            __typename
            ... on _FileLink {
              name
              url
              size
            }
          }
        }
      }
    }
  }
`;

const ContactStyles = styled.div`
  width: 100%;
  padding: 0 100px;
  max-width: 700px;
  @media screen and (max-width: 1080px) {
    padding: 0 60px;
  }
  @media screen and (max-width: 480px) {
    padding: 0 30px;
  }
  .contact-info {
    p {
      margin-bottom: 30px;
    }
  }
`;

const Close = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  .button-hide {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

const ContactHeader = styled.h2`
  font-family: "Candice";
  font-size: 3rem;
  transform: rotate(-4deg) translateX(-30px);
  display: inline-block;
  margin-bottom: 1rem;
`;

export default function Contact({ setContactOpen }) {
  const { loading, error, data } = useQuery(CONTACT_QUERY);

  if (loading) return null;
  if (error) return null;

  console.log(data);

  return (
    <>
      <Close>
        <button className="button-alt" onClick={() => setContactOpen(false)}>
          Close
        </button>
        <Link href="/showroom">
          <button className="button-alt button-hide">Showroom</button>
        </Link>
      </Close>
      <ContactStyles>
        <ContactHeader>Get in touch</ContactHeader>
        <div className="contact-info">
          {RichText.render(data.allContacts.edges[0].node.contact)}
        </div>
        <a
          href={data.allContacts.edges[0].node.wholesale_form.url}
          target="_blank"
          style={{ borderBottom: "2px solid black" }}
        >
          Download our wholesale account form
        </a>
        <div style={{ height: 30 }} />
        <ContactForm />
      </ContactStyles>
    </>
  );
}
