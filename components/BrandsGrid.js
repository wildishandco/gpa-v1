import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { ImageOverlay } from "../pages/[uid]";

const BrandGridStyles = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 50px auto 0 auto;
  /* @media screen and (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
  } */
`;

const BrandThumb = styled.div`
  position: relative;
  width: 33.3333%;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
  .brand-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    z-index: 2;
    pointer-events: none;
    img {
      object-fit: cover;
      width: 100%;
    }
  }
`;

export default function BrandsGrid({ brands }) {
  return (
    <BrandGridStyles>
      {brands.map((b, i) => (
        <Link
          key={i}
          href={b.internal_link.uid ? `/${b.internal_link.uid}` : ""}
        >
          <BrandThumb>
            <Image
              src={b.background_image.url}
              layout="responsive"
              width="100"
              height="100"
              alt={b.background_image.alt}
            />
            <ImageOverlay hover />
            <div className="brand-logo">
              <img src={b.brand_logo.url} alt={b.background_image.alt} />
            </div>
          </BrandThumb>
        </Link>
      ))}
    </BrandGridStyles>
  );
}
