import Image from "next/image";

export default function Gallery({ input }) {
  return (
    <>
      {input.map((image, i) => {
        return (
          <Image
            key={i}
            src={image.gallery_image.url}
            alt={image.gallery_image.alt}
            unsized
            layout="responsive"
          />
        );
      })}
    </>
  );
}
