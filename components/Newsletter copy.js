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
    <>
      <NewsletterWrapper>
        <h2>Sign up</h2>
        <p>
          Sign up to our newsletter and we will keep you in the loop with
          everything good going on.
        </p>
        <form
          action="https://goodpeopleagency.us10.list-manage.com/subscribe/post?u=5003ff5c7d518af74ff303bc1&amp;id=0572979a82"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          novalidate
        >
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            size="30"
          />
          <button type="submit" value="Subscribe" name="subscribe">
            Subscribe
          </button>
        </form>
      </NewsletterWrapper>

      <div id="mc_embed_signup">
        <form
          action="https://goodpeopleagency.us10.list-manage.com/subscribe/post?u=5003ff5c7d518af74ff303bc1&amp;id=0572979a82"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <input
              type="email"
              value=""
              name="EMAIL"
              id="mce-EMAIL"
              placeholder="email address"
              required
            />
            {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
            <div aria-hidden="true">
              <input
                type="text"
                name="b_5003ff5c7d518af74ff303bc1_0572979a82"
                tabindex="-1"
                value=""
              />
            </div>
            <div>
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
