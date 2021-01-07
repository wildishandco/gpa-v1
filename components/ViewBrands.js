import { VisitSection, ImageOverlay } from "../pages/[uid]";
import Image from "next/image";

export default function ViewBrands({ image, menuOpen, setMenuOpen }) {
  return (
    <VisitSection>
      <Image
        src={image.url}
        alt={image.alt}
        layout="fill"
        className="visit-image"
      />
      <ImageOverlay />
      <button onClick={() => setMenuOpen(!menuOpen)}>
        View our brands
      </button>
    </VisitSection>
  );
}
