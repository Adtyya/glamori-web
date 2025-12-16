import { Heading, Paragraph } from "@/components/text";
import { ArticleProps } from "@/types/article";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { category_map } from "@/constant/category";
import { formatDate } from "@/lib/formatdate";

function FeaturedCard(props: ArticleProps) {
  return (
    <Link href={`/blog/${props.slug}`}>
      <div className="overflow-hidden transition-all duration-300 bg-white cursor-pointer rounded-2xl hover:-translate-y-1 group">
        <div className="relative w-full h-64 lg:h-96">
          <Image
            src={props.image}
            alt={props.title}
            fill
            className="object-cover"
            quality={100}
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-3 p-5">
          <Heading
            as={3}
            className="font-semibold leading-snug transition-colors group-hover:text-glamorig-500"
          >
            {props.title}
          </Heading>

          <Paragraph className="leading-relaxed text-gray-600 line-clamp-3">
            {props.spoiler}
          </Paragraph>

          <div className="flex items-center gap-2 pt-1">
            <span className="text-sm text-gray-500">
              {formatDate(props.updatedAt ?? props.date)}
            </span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="text-sm text-gray-500">
              {category_map.find((r) => r.value === props.category)?.title}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

type CardProps = {
  showSpoiler?: boolean;
  imageSize?: "normal" | "large";
};

function Card({
  showSpoiler = false,
  imageSize = "normal",
  ...props
}: CardProps & ArticleProps) {
  const getSize = useMemo(() => {
    switch (imageSize) {
      case "normal":
        return "h-64 lg:h-44";
      case "large":
        return "h-64";
      default:
        return "h-1";
    }
  }, [imageSize]);

  return (
    <Link href={`/blog/${props.slug}`}>
      <div className="overflow-hidden transition-all duration-300 bg-white cursor-pointer rounded-2xl hover:-translate-y-1 group">
        <div className={`relative w-full ${getSize}`}>
          <Image
            src={props.image}
            alt={props.title}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-3 p-5">
          <Heading
            as={6}
            className="font-semibold leading-snug transition-colors group-hover:text-glamorig-500 line-clamp-2"
          >
            {props.title}
          </Heading>

          {showSpoiler ? (
            <Paragraph className="leading-relaxed text-gray-600 line-clamp-3">
              {props.spoiler}
            </Paragraph>
          ) : null}

          <div className="flex items-center gap-2 pt-1">
            <span className="text-sm text-gray-500">
              {formatDate(props.updatedAt ?? props.date)}
            </span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="text-sm text-gray-500">
              {category_map.find((r) => r.value === props.category)?.title}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export { FeaturedCard, Card };
