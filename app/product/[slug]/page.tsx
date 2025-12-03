import DetailProduct from "@/components/screens/detail_product/detailproduct";
import { treatment_list } from "@/constant/treatment";
import { Metadata } from "next";

export function generateStaticParams() {
  return treatment_list.map((item) => ({
    slug: item.slug,
  }));
}

type DetailProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: DetailProps): Promise<Metadata> {
  const { slug } = await params;

  const product = treatment_list.find((r) => r.slug === slug);

  if (!product) {
    return {
      title: "Treatment Not Found | Glamori Clinic",
      description: "The treatment you are looking for is not available.",
    };
  }

  return {
    title: `${product.title} | Glamori Clinic`,
    description: product.spoiler || "",
    openGraph: {
      title: `${product.title} | Glamori Clinic`,
      description: product.spoiler || "",
      type: "article",
      url: `https://your-domain.com/product/${product.slug}`,
      // images: [
      //   {
      //     url: product.image || "/assets/default-og.jpg",
      //     width: 1200,
      //     height: 630,
      //     alt: product.title,
      //   },
      // ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | Glamori Clinic`,
      description: product.spoiler || product.subtitle?.slice(0, 150) || "",
      // images: [product.image || "/assets/default-og.jpg"],
    },
  };
}

export default async function Detail({ params }: DetailProps) {
  const { slug } = await params;
  const productDetails = treatment_list.find((r) => r.slug === slug);

  if (!productDetails) {
    return <div>Product not found</div>;
  }

  return <DetailProduct {...{ productDetails }} />;
}
