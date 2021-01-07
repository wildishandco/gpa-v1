import styled from "styled-components";

const NewsletterWrapper = styled.div`
  color: var(--background);
  width: 100%;
  max-width: 450px;
  margin: 100px auto 50px auto;
  text-align: center;
  p {
    font-size: 0.9rem;
    margin: 2rem 0;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
      padding: 10px;
      border: none;
      outline: none;
      background: white;
      margin-bottom: 1rem;
      ::placeholder {
        color: var(--copycolor);
        font-size: 16px;
        font-family: var(--body);
      }
    }
    button {
      background: var(--yellow);
      padding: 7px 20px;
      border: none;
      outline: none;
      font-family: var(--cooper);
      font-size: 18px;
      align-self: ${(props) => (props.left ? "flex-start" : "center")};
      cursor: pointer;
    }
  }
`;

export default function Newsletter() {
  return (
    <NewsletterWrapper>
      <h2>Sign up</h2>
      <p>
        Sign up to our newsletter and we will keep you in the loop with
        everything good going on.
      </p>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          size="30"
        />
        <button type="submit">Subscribe</button>
      </form>
    </NewsletterWrapper>
  );
}
