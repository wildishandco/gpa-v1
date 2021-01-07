import { useState } from "react";
import styled from "styled-components";
import Wrapper from "@components/Wrapper";
import ContactForm from "@components/ContactForm";

const LoginStyles = styled.section`
  position: relative;
`;

const LoginInner = styled.div`
  max-width: 500px;
  margin: 140px auto 60px auto;
  background: var(--yellow);
  padding: 50px;
  box-shadow: 10px 10px 1px var(--secondary);
  h2 {
    font-size: 4rem;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  .password {
    display: flex;
    flex-direction: column;
    label {
      margin-top: 1rem;
    }
    input {
      padding: 8px;
      border: none;
      outline: none;
      background: white;
      margin-bottom: 1rem;
    }
    button {
      align-self: flex-end;
    }
  }
`;

export default function Login({ setPassword, showroomPassword }) {
  const [handlePassword, setHandlePassword] = useState("");
  const [wrongPassword, setWrongPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handlePassword !== showroomPassword) {
      setWrongPassword(true);
    } else {
      setPassword(handlePassword);
    }
  };

  return (
    <LoginStyles>
      <Wrapper>
        <LoginInner>
          <h2>Showroom</h2>
          <form className="password" onSubmit={handleSubmit}>
            <label>Password:</label>
            <input
              type="password"
              onChange={(e) => setHandlePassword(e.target.value)}
              style={{ width: "100%" }}
            />
            <button className="submit" type="submit">
              Enter
            </button>
            {wrongPassword && (
              <p style={{ margin: "1.5rem 0" }}>
                Incorrect password. Please try again.
              </p>
            )}
          </form>
          <p style={{ margin: "1.5rem 0" }}>
            To view this season's showroom, get in touch for the password.
          </p>
          <ContactForm />
        </LoginInner>
      </Wrapper>
    </LoginStyles>
  );
}
