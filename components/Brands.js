import Wrapper from "./Wrapper";
import BodyText from "./SliceZone/BodyText";
import BrandsGrid from "./BrandsGrid";
import BrandQuotes from "./BrandQuotes";

export default function Brands({ brands }) {
  return (
    <>
      <Wrapper>
        <h2 style={{ textAlign: "center", marginTop: 60 }}>{brands.brands[0].text}</h2>
        {brands.copy && <BodyText input={brands.copy} />}
        {brands.brand_quotes[0] && <BrandQuotes quotes={brands.brand_quotes} />}
        {brands.brand_grid[0] && <BrandsGrid brands={brands.brand_grid} />}
      </Wrapper>
    </>
  );
}
