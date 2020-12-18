import { useState } from "react";
import styled from "styled-components";
import { RichText } from "prismic-reactjs";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const MENU_QUERY = gql`
  query GetMenu {
    allBrand_pages {
      edges {
        node {
          brand_name
          hero_image
          _meta {
            uid
          }
        }
      }
    }
  }
`;

const NavFlex = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const NavImage = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavInner = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  padding: 60px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  .icon-close {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    button {
      display: inline-block;
    }
    svg {
      margin-bottom: 50px;
      cursor: pointer;
    }
  }

  span {
    margin: 1rem 0;
    display: inline-block;
    a {
      color: var(--background);
      font-family: var(--cooper);
      text-decoration: none;
      transition: 0.3s ease;
      :hover {
        text-decoration: underline;
      }
    }
  }
`;

export default function Navigation() {
  const { loading, error, data } = useQuery(MENU_QUERY);
  const [showImage, setShowImage] = useState(0);

  console.log(data, "menu");

  console.log(showImage, "mouse");

  if (loading) return null;
  if (error)
    return (
      <NavInner>
        <Link href="/">
          Failed to load menu{" "}
          <span role="img" aria-label="sad face emoji">
            😔
          </span>
        </Link>
      </NavInner>
    );

  return (
    <NavFlex>
      <NavImage>
        <AnimatePresence>
          {data.allBrand_pages.edges.map((menuImage, i) => {
            console.log(i, "index");
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: showImage === i ? 1 : 0 }}
                exit={{ opacity: 0 }}
              >
                <Image
                  src={menuImage.node.hero_image.url}
                  layout="fill"
                  alt={RichText.asText(menuImage.node.brand_name)}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </NavImage>
      <NavInner>
        <div className="icon-close">
          <Link href="/">
            <svg
              id="Group_30"
              data-name="Group 30"
              xmlns="http://www.w3.org/2000/svg"
              width="114"
              height="80.376"
              viewBox="0 0 114 80.376"
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M679.475,124.959a36.312,36.312,0,0,1-22.548-7.847q-1-.785-1.939-1.633a2.688,2.688,0,0,0-2.8-.5q-1.183.481-2.409.878A36.523,36.523,0,1,1,661.133,52.4q1,.79,1.95,1.641a2.683,2.683,0,0,0,2.8.495q1.154-.463,2.344-.85a36.526,36.526,0,1,1,11.249,71.275Z"
                transform="translate(-602 -44.583)"
                fill="#f0b945"
              />
              <path
                id="Path_2"
                data-name="Path 2"
                d="M619.312,90.923l.417.288A22.358,22.358,0,0,0,654.585,77.59a1.437,1.437,0,0,0,.027-.258l0-.085.026-.081a.965.965,0,0,1,.042-.109,18.9,18.9,0,0,1,29.872-10.838l.37.27-.129.441a7.35,7.35,0,0,0-.128,3.622,1.515,1.515,0,0,0,2.961-.642,4.345,4.345,0,0,1,3.323-5.161h0a1.516,1.516,0,0,0-.642-2.963,7.255,7.255,0,0,0-3.1,1.506l-.387.318-.406-.291a22.356,22.356,0,0,0-35.085,12.936,1.539,1.539,0,0,0-.042.309l0,.087-.025.082c-.012.036-.026.072-.039.106a18.914,18.914,0,0,1-29.75,11.4l-.367-.259.112-.435A7.276,7.276,0,0,0,621.255,84a1.516,1.516,0,1,0-2.949.7,4.338,4.338,0,0,1-3.216,5.228,1.515,1.515,0,1,0,.7,2.947,7.26,7.26,0,0,0,3.135-1.623Z"
                transform="translate(-596.036 -37.396)"
                fill="#2b2b2b"
              />
              <g
                id="Group_6"
                data-name="Group 6"
                transform="translate(19.192 22.934)"
              >
                <g id="Group_5" data-name="Group 5">
                  <path
                    id="Path_3"
                    data-name="Path 3"
                    d="M616.924,59.872a1.468,1.468,0,0,0-.49.079c-1.583.546-2.315,4.135-.837,8.412s4.269,6.654,5.852,6.1,2.315-4.135.837-8.413h0a12.636,12.636,0,0,0-2.973-4.947A3.765,3.765,0,0,0,616.924,59.872Z"
                    transform="translate(-614.794 -59.872)"
                    fill="#2b2b2b"
                  />
                </g>
              </g>
              <g
                id="Group_8"
                data-name="Group 8"
                transform="translate(38.063 15.651)"
              >
                <g id="Group_7" data-name="Group 7">
                  <path
                    id="Path_4"
                    data-name="Path 4"
                    d="M629.505,55.017a1.479,1.479,0,0,0-.492.079c-1.581.546-2.314,4.136-.835,8.412s4.271,6.654,5.851,6.1,2.313-4.135.836-8.413h0a12.617,12.617,0,0,0-2.971-4.947A3.768,3.768,0,0,0,629.505,55.017Z"
                    transform="translate(-627.375 -55.017)"
                    fill="#2b2b2b"
                  />
                </g>
              </g>
              <g
                id="Group_10"
                data-name="Group 10"
                transform="translate(86.517 42.769)"
              >
                <g id="Group_9" data-name="Group 9">
                  <path
                    id="Path_5"
                    data-name="Path 5"
                    d="M665.84,87.769a1.468,1.468,0,0,0,.49-.08c1.583-.546,2.315-4.135.837-8.413s-4.269-6.653-5.852-6.1-2.315,4.135-.837,8.414h0a12.636,12.636,0,0,0,2.973,4.947A3.765,3.765,0,0,0,665.84,87.769Z"
                    transform="translate(-659.677 -73.096)"
                    fill="#2b2b2b"
                  />
                </g>
              </g>
              <g
                id="Group_12"
                data-name="Group 12"
                transform="translate(67.647 50.051)"
              >
                <g id="Group_11" data-name="Group 11">
                  <path
                    id="Path_6"
                    data-name="Path 6"
                    d="M653.259,92.624a1.478,1.478,0,0,0,.492-.079c1.581-.546,2.314-4.136.835-8.414s-4.271-6.652-5.851-6.1-2.313,4.135-.836,8.413h0a12.617,12.617,0,0,0,2.971,4.947A3.768,3.768,0,0,0,653.259,92.624Z"
                    transform="translate(-647.097 -77.951)"
                    fill="#2b2b2b"
                  />
                </g>
              </g>
            </svg>
          </Link>
          <button>Close</button>
        </div>
        {data.allBrand_pages.edges.map((menuItem, i) => {
          return (
            <motion.span onHoverStart={() => setShowImage(i)}>
              <Link key={i} href={`/${menuItem.node._meta.uid}`}>
                {RichText.asText(menuItem.node.brand_name)}
              </Link>
            </motion.span>
          );
        })}
      </NavInner>
    </NavFlex>
  );
}
