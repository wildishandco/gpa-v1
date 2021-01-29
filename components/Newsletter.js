import styled from "styled-components";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
  "https://goodpeopleagency.us10.list-manage.com/subscribe/post?u=5003ff5c7d518af74ff303bc1&amp;id=0572979a82";

const NewsletterWrapper = styled.div`
  color: var(--background);
  width: 100%;
  max-width: 450px;
  margin: 100px auto 50px auto;
  text-align: center;
  p {
    margin: 2rem 0;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      input {
        padding: 10px;
        border: none;
        outline: none;
        background: white;
        margin-bottom: 1rem;
        display: inline-block;
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
  }
`;

const SimpleForm = () => <MailchimpSubscribe url={url} />;

export default function Newsletter() {
  return (
    <>
      <NewsletterWrapper>
        <h2>Sign up</h2>
        <p>
          Sign up to our newsletter and we will keep you in the loop with
          everything good going on.
        </p>
        <div className="form">
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <div>
                <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
                {status === "sending" && (
                  <div style={{ marginTop: 20 }}>sending...</div>
                )}
                {status === "error" && (
                  <div
                    style={{ marginTop: 20 }}
                    dangerouslySetInnerHTML={{ __html: message }}
                  />
                )}
                {status === "success" && (
                  <div style={{ marginTop: 20 }}>Subscribed!</div>
                )}
              </div>
            )}
          />{" "}
        </div>
      </NewsletterWrapper>
    </>
  );
}
