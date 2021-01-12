import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

export default function Gallery({ input }) {
  const items = input.map((image, i) => [
    <Image
      key={i}
      src={image.gallery_image.url}
      alt={image.gallery_image.alt}
      layout="responsive"
      width={image.gallery_image.dimensions.width}
      height={image.gallery_image.dimensions.height}
      onDragStart={handleDragStart}
    />,
  ]);

  return items[1] ? (
    <AliceCarousel
      autoHeight
      mouseTracking
      items={items}
      disableButtonsControls
    />
  ) : (
    <Image
      key={1}
      src={input[0].gallery_image.url}
      alt={input[0].gallery_image.alt}
      layout="responsive"
      width={input[0].gallery_image.dimensions.width}
      height={input[0].gallery_image.dimensions.height}
    />
  );
}
