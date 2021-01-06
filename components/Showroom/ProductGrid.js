import Image from "next/image";
import styled from "styled-components";

const Grid = styled.div`
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
  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  .product-thumb {
    h3 {
      font-size: 1.1rem;
      margin-top: 1rem;
    }
    .price {
      margin: 1rem 0;
    }
    .rrp {
      font-size: 0.8rem;
    }
  }
`;

export default function ProductGrid({ products, brand }) {
  return (
    <Grid>
      {products.map((p, i) => {
        return (
          <>
            {p.data.brand.slug === brand || !brand || brand === "all" ? (
              <div className="product-thumb" key={i}>
                <Image
                  src={p.data.product_image.url}
                  layout="responsive"
                  width="100"
                  height="100"
                />
                <h3>{p.data.product_name[0].text}</h3>
                <p className="price">{p.data.price} GBP</p>
                <p className="rrp">RRP: {p.data.rrp} GBP</p>
                <p className="rrp">ART NO: {p.data.article_number}</p>
              </div>
            ) : null}
          </>
        );
      })}
    </Grid>
  );
}
