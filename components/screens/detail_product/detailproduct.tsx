import { ProductProps } from "@/types/product";
import Hero from "./section/hero";
import Treatment from "./section/treatment";

export type DetailProductProps = {
  productDetails: ProductProps;
};

export default function DetailProduct({ productDetails }: DetailProductProps) {
  return (
    <>
      <Hero {...{ productDetails }} />
      <Treatment />
    </>
  );
}
