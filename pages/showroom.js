import { showroomClient, client } from "@utils/prismicPosts";
import Prismic from "prismic-javascript";

export default function Showroom({ products, brands }) {
  console.log(products, brands, "showRoom");
  return <div>Showroom</div>;
}

export async function getStaticProps() {
  const products = await showroomClient.query(
    Prismic.Predicates.at("document.type", "product")
  );
  const brands = await showroomClient.query(
    Prismic.Predicates.at("document.type", "brand")
  );
  return {
    props: {
      products,
      brands,
    },
  };
}
