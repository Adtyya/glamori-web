import { ProductProps } from "@/types/product";
import Hero from "./section/hero";
import Treatment from "./section/treatment";
import WhatOurCustomerSay from "./section/ourcustomer";

export type DetailProductProps = {
  productDetails: ProductProps;
};

export default function DetailProduct({ productDetails }: DetailProductProps) {
  return (
    <>
      <Hero {...{ productDetails }} />
      <Treatment />
      <WhatOurCustomerSay />
    </>
  );
}
