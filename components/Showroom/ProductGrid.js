import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Grid = styled(motion.div)`
  flex: 75%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  row-gap: 30px;
  column-gap: 30px;
  overflow: scroll;
  @media screen and (max-width: 600px) {
    flex: 3;
    width: 100%;
  }
  @media screen and (min-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .product-thumb {
    .image-container {
      width: 100%;
      padding-top: 125%;
      position: relative;
      div {
        position: absolute !important;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: zoom-in;
      }
    }
    h3 {
      font-size: 1.1rem;
      margin: 1rem 0 0 0;
    }
    .description {
      margin: 1rem 0;
      font-size: 0.9rem;
    }
    .rrp {
      margin: 1rem 0;
      font-size: 0.9rem;
    }
  }
  .image-hover {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: scroll;
    backdrop-filter: blur(10px);
    z-index: 9999;
    cursor: zoom-out;
    display: flex;
    justify-content: center;
    div {
      max-width: 800px;
      width: 100%;
      padding: 30px;
      position: relative;
    }
  }
`;

export default function ProductGrid({ products, brand }) {
  const [imageModal, setImageModal] = useState(false);
  const [info, setInfo] = useState({});
  function handleModalClose() {
    setInfo({});
    setImageModal(false);
  }

  return (
    <Grid>
      {products.map((p, i) => {
        return (
          <>
            {p.data.brand.uid === brand || !brand || brand === "all" ? (
              <>
                <div className="product-thumb" key={i}>
                  {p?.data?.product_image?.url && (
                    <div className="image-container">
                      <Image
                        src={p?.data?.product_image?.url}
                        layout="responsive"
                        width={p?.data?.product_image?.dimensions?.width || 100}
                        height={
                          p?.data?.product_image?.dimensions?.height || 100
                        }
                        onClick={() => {
                          setInfo({
                            image: p.data.product_image.url.replace(
                              "?auto=compress,format",
                              ""
                            ),
                          });
                          setImageModal(true);
                        }}
                      />
                    </div>
                  )}
                  <h3>{p?.data?.product_name[0]?.text}</h3>
                  <p className="description">
                    {p?.data?.product_description[0]?.text}
                  </p>
                  {p?.data?.price?.map((price, i) => (
                    <p key={i} className="price">
                      {price?.cost_rrp}
                    </p>
                  ))}
                  <p className="rrp">{p?.data?.article_number}</p>
                </div>
              </>
            ) : null}
          </>
        );
      })}
      {imageModal && (
        <AnimatePresence>
          <motion.div
            className="image-hover"
            key={info?.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => handleModalClose()}
          >
            <div>
              {/* <Image
                src={info?.image}
                layout="responsive"
                width="100"
                height="125"
              /> */}
              <img src={info?.image} />
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </Grid>
  );
}
