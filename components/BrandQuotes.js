import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import { RichText } from "prismic-reactjs";

const QuoteThumb = styled.div`
  text-align: center;
  max-width: 700px;
  margin: auto;
  h3 {
    margin-bottom: 2rem;
  }
`;

const handleDragStart = (e) => e.preventDefault();

export default function BrandQuotes({ quotes }) {
  const items = quotes.map((q, i) => [
    <QuoteThumb>
      <h3>{RichText.asText(q.brand_quote)}</h3>
      <p>{q.brand_name}</p>
    </QuoteThumb>,
  ]);

  return items[1] ? (
    <AliceCarousel mouseTracking items={items} disableButtonsControls />
  ) : (
    <QuoteThumb>
      <h3>{RichText.asText(quotes[0].brand_quote)}</h3>
      <p>{quotes[0].brand_name}</p>
    </QuoteThumb>
  );
}
