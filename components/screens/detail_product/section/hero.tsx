import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";
import Image from "next/image";
import type { DetailProductProps } from "../detailproduct";
import Markdown from "react-markdown";

export default function Hero({ productDetails }: DetailProductProps) {
  return (
    <Container>
      <div className="py-12">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="col-span-full lg:col-span-1">
            <div className="relative w-full overflow-hidden aspect-square rounded-2xl">
              <Image
                src="https://placehold.co/600x600.png"
                alt="test"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="col-span-full lg:col-span-2 space-y-3.5">
            <Heading as={1} className="capitalize text-glamorig-500">
              {productDetails.title}
            </Heading>
            <div className="prose  prose-gray lg:prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-lg prose-p:my-1 prose-ul:my-1 prose-li:my-0 prose-h2:mt-3 prose-h2:mb-2 prose-h3:mt-3 prose-h3:mb-1">
              <Markdown>{productDetails.subtitle}</Markdown>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
