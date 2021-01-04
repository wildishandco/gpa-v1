import React from "react";
import styled from "styled-components";
import { RichText } from "prismic-reactjs";
import { useQuery, gql } from "@apollo/client";
import ContactForm from "./ContactForm";

const CONTACT_QUERY = gql`
  query GetContact {
    allContacts {
      edges {
        node {
          contact
        }
      }
    }
  }
`;

const ContactStyles = styled.div`
  width: 100%;
  padding: 0 100px;
  max-width: 700px;
  @media screen and (max-width: 480px) {
    padding: 30px;
  }
  .contact-info {
    p {
      margin-bottom: 30px;
    }
  }
`;

const Close = styled.div`
  padding: 30px;
  button:hover {
    background: var(--copycolor);
  }
`;

const ContactHeader = styled.h2`
  font-family: "Candice";
  font-size: 3rem;
  transform: rotate(-4deg);
  display: inline-block;
  margin-bottom: 1rem;
`;

export default function Contact({ setContactOpen }) {
  const { loading, error, data } = useQuery(CONTACT_QUERY);

  if (loading) return null;
  if (error) return null;

  return (
    <>
      <Close>
        <button onClick={() => setContactOpen(false)}>Close</button>
      </Close>
      <ContactStyles>
        <ContactHeader>Get in touch</ContactHeader>
        <div className="contact-info">
          {RichText.render(data.allContacts.edges[0].node.contact)}
        </div>
        <ContactForm />
      </ContactStyles>
    </>
  );
}
