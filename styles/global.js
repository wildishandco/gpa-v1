import { css } from "styled-components";

const global = css`
  html {
    --cooper: cooper-black-std, serif;
    --body: itc-american-typewriter, serif;
    --background: #fafaef;
    --copycolor: #2b2b2b;
    --yellow: #f0b945;
    --secondary: #282528;
  }

  body {
    font-family: var(--body);
    font-style: normal;
    font-weight: 500;
    background-color: var(--background);
    color: var(--copycolor);
    font-size: 18px;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    position: relative;
    line-height: 1.55;
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
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

  h2 {
    font-size: 2.5rem;
    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .button {
    font-size: 18px;
    font-family: var(--body);
    font-style: normal;
    font-weight: 500;
    cursor: pointer;
    background: none;
    outline: none;
    border: none;
    padding: 20px;
    box-sizing: border-box;
    color: var(--background);
    border: 1px rgba(0, 0, 0, 0) solid;
    transition: 0.3s ease;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
    @media screen and (max-width: 480px) {
      padding: 12px;
    }

    :hover,
    :focus {
      border: 1px var(--yellow) solid;
      outline: none;
      box-shadow: 5px 5px 1px var(--secondary);
      background: var(--yellow);
    }
    :active {
      box-shadow: 0px 0px 0px var(--secondary);
    }
  }

  .showroom-button {
    font-size: 18px;
    font-family: var(--body);
    font-style: normal;
    font-weight: 500;
    cursor: pointer;
    background: none;
    outline: none;
    border: none;
    padding: 20px;
    box-sizing: border-box;
    color: var(--copycolor);
    border: 1px rgba(0, 0, 0, 0) solid;
    transition: 0.3s ease;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
    @media screen and (max-width: 480px) {
      padding: 12px;
    }

    :hover,
    :focus {
      border: 1px var(--yellow) solid;
      outline: none;
      box-shadow: 5px 5px 1px var(--secondary);
      background: var(--yellow);
    }
    :active {
      box-shadow: 0px 0px 0px var(--secondary);
    }
  }

  .submit {
    font-size: 18px;
    font-family: var(--body);
    font-style: normal;
    font-weight: 500;
    cursor: pointer;
    background: none;
    outline: none;
    border: none;
    box-sizing: border-box;
    border-bottom: 2px rgba(0, 0, 0, 0) solid;
    transition: 0.3s ease;
    text-align: center;
    color: var(--copycolor);
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
    @media screen and (max-width: 480px) {
      padding: 12px;
    }
    :after {
      content: ">";
      display: inline-block;
      padding-left: 0.5rem;
    }
    :hover,
    :focus {
      border-bottom: 2px solid var(--copycolor);
    }
  }

  .button-alt {
    font-size: 18px;
    font-family: var(--body);
    font-style: normal;
    font-weight: 500;
    cursor: pointer;
    background: none;
    outline: none;
    border: none;
    box-sizing: border-box;
    border: 2px rgba(0, 0, 0, 0) solid;
    transition: 0.3s ease;
    text-align: center;
    padding: 18px;
    color: var(--background);
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
    @media screen and (max-width: 480px) {
      padding: 12px;
    }
    :hover,
    :focus {
      border: 2px solid var(--background);
    }
  }

  a {
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s ease;
    color: inherit;
    border-bottom: rgba(0, 0, 0, 0) 2px solid;
    :hover {
      border-bottom: var(--copycolor) 2px solid;
    }
  }
  .candice {
    font-family: "Candice";
  }

  .alice-carousel__dots-item:not(.__custom):hover,
  .alice-carousel__dots-item:not(.__custom).__active {
    background-color: var(--yellow) !important;
  }

  .alice-carousel__dots-item:not(.__custom) {
    background-color: transparent !important;
    border: 1px var(--yellow) solid !important;
    width: 10px !important;
    height: 10px !important;
  }
  .iframe-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      transform: scale(1.3);
      @media (max-aspect-ratio: 4/3) {
        display: none;
      }
      @media (min-aspect-ratio: 20/9) {
        transform: scale(1.5);
      }
      @media (min-aspect-ratio: 20/8) {
        display: none;
      }
      @media screen and (max-height: 400px) {
        display: none;
      }
      @media (max-aspect-ratio: 8/5) {
        transform: scale(1.5);
      }
    }
  }
`;

export default global;
