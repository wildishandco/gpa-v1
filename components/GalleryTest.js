import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [<div>Hello</div>, <div>Hello</div>, <div>Hello</div>];

export default function GalleryTest() {
  return <AliceCarousel mouseTracking items={items} disableButtonsControls />;
}
