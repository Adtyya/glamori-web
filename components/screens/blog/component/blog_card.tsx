import { Heading, Paragraph } from "@/components/text";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

function FeaturedCard() {
  return (
    <Link href="/blog/read">
      <div className="overflow-hidden transition-all duration-300 bg-white shadow-lg cursor-pointer rounded-2xl hover:shadow-2xl hover:-translate-y-1 group">
        <div className="relative w-full h-64 lg:h-96">
          <Image
            src="https://placehold.co/1200x1200.png"
            alt="test"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-3 p-5">
          <Heading
            as={4}
            className="font-semibold leading-snug transition-colors group-hover:text-glamorig-500"
          >
            Lorem, ipsum.
          </Heading>

          <Paragraph className="leading-relaxed text-gray-600 line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil
            provident non sapiente, ipsam corporis deleniti, velit temporibus
            expedita itaque dicta deserunt corrupti alias! Sunt, ea consectetur!
            Enim, quae ipsum.
          </Paragraph>

          <div className="flex items-center gap-2 pt-1">
            <span className="text-sm text-gray-500">10 Nov 2025</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="text-sm text-gray-500">Skincare</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

type CardProps = {
  spoiler?: boolean;
  imageSize?: "normal" | "large";
};

function Card({ spoiler = false, imageSize = "normal" }: CardProps) {
  const getSize = useMemo(() => {
    switch (imageSize) {
      case "normal":
        return "h-64 lg:h-44";
      case "large":
        return "h-64";
      default:
        break;
    }
  }, [imageSize]);

  return (
    <Link href="/blog/read">
      <div className="overflow-hidden transition-all duration-300 bg-white shadow-lg cursor-pointer rounded-2xl hover:shadow-2xl hover:-translate-y-1 group">
        <div className={`relative w-full ${getSize}`}>
          <Image
            src="https://placehold.co/1200x1200.png"
            alt="test"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-3 p-5">
          <Heading
            as={5}
            className="font-semibold leading-snug transition-colors group-hover:text-glamorig-500 line-clamp-1"
          >
            Lorem, ipsum.
          </Heading>

          {spoiler ? (
            <Paragraph className="leading-relaxed text-gray-600 line-clamp-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nihil provident non sapiente, ipsam corporis deleniti, velit
              temporibus expedita itaque dicta deserunt corrupti alias! Sunt, ea
              consectetur! Enim, quae ipsum.
            </Paragraph>
          ) : null}

          <div className="flex items-center gap-2 pt-1">
            <span className="text-sm text-gray-500">10 Nov 2025</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="text-sm text-gray-500">Skincare</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export { FeaturedCard, Card };
