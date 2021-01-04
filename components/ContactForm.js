import React from "react";
import styled from "styled-components";

const ContactFormStyles = styled.div``;

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
        <div className="form-inner">
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/f/xpzokajq"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="New message from website"
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
              name="_replyto"
              style={{ width: "100%" }}
            />
            <textarea
              placeholder="Message"
              rows="4"
              name="message"
              style={{ width: "100%" }}
            />
            {status === "SUCCESS" ? (
              <p style={{ color: "var(--white)" }}>Thanks!</p>
            ) : (
              <button className="submit">Submit</button>
            )}
            {status === "ERROR" && (
              <p style={{ color: "var(--white)", marginTop: 20 }}>
                Ooops! There was an error.
              </p>
            )}
          </form>
        </div>
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
