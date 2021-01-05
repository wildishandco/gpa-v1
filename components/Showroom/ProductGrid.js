import Wrapper from "@components/Wrapper";
import Image from "next/image";
import styled from "styled-components";

const Grid = styled.div`
  flex: 75%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  row-gap: 30px;
  column-gap: 30px;
  max-height: 100vh;
  overflow: scroll;
`;

export default function ProductGrid({ products, brand }) {
  return (
    <Grid>
      {products.map((p, i) => {
        return (
          <>
            {p.data.brand.slug === brand || !brand || brand === "all" ? (
              <div key={i}>
                <Image
                  src={p.data.product_image.url}
                  layout="responsive"
                  width="100"
                  height="100"
                />
                <h3>{p.data.product_name[0].text}</h3>
              </div>
            ) : null}
          </>
        );
      })}
    </Grid>
  );
}
