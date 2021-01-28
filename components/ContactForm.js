import React from "react";
import styled from "styled-components";

const ContactFormStyles = styled.div`
  margin-bottom: 60px;
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    input,
    textarea {
      background: none;
      outline: none;
      border: none;
      border-bottom: 2px solid var(--copycolor);
      margin-bottom: 1.5rem;
      padding: 8px 0;
      ::placeholder {
        color: var(--copycolor);
        font-size: 16px;
        font-family: var(--body);
      }
    }
  }
`;

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <ContactFormStyles>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/f/xgepdjzk"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="Message from website"
          ></input>
          <input
            type="text"
            placeholder="Name"
            name="name"
            style={{ width: "100%" }}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            style={{ width: "100%" }}
          />
          <textarea
            placeholder="Message"
            rows="5"
            name="message"
            style={{ width: "100%" }}
          />
          {status === "SUCCESS" ? (
            <p style={{ color: "var(--copycolor)" }}>Thanks!</p>
          ) : (
            <button className="submit">Send</button>
          )}
          {status === "ERROR" && (
            <p style={{ color: "var(--white)", marginTop: 20 }}>
              Ooops! There was an error.
            </p>
          )}
        </form>
      </ContactFormStyles>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
