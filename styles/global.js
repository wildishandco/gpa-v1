import { css } from "styled-components";

const global = css`
  html {
    width: 100%;
    overflow-x: hidden;
    --cooper: cooper-black-std, serif;
    --body: itc-american-typewriter, serif;
    --background: #fafaef;
    --copycolor: #2b2b2b;
  }

  body {
    font-family: var(--body);
    font-style: normal;
    font-weight: 500;
    background-color: var(--background);
    color: var(--copycolor);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--cooper);
    font-style: normal;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export default global;
