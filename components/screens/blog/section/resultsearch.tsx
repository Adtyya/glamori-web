"use client";
import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";
import { FeaturedCard } from "../component/blog_card";
import { useSearchParams } from "next/navigation";
import { useArticles } from "../service/useArticle";
import Spinner from "@/components/spinner";
import NotFoundBlog from "../component/notfound";

export default function ResultSearch() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") ?? "-";

  const { articles, error, loading } = useArticles(25, query);

  const isArticlesEmpty = !loading && !error && articles.length === 0;

  return (
    <Container>
      <div className="py-12">
        <div className="flex flex-col items-center justify-between lg:flex-row gap-3.5">
          <div className="text-center lg:text-start">
            <Paragraph size="xl" className="font-semibold !text-glamorig-500">
              Hasil Pencarian
            </Paragraph>
            <Heading as={3} className="capitalize">
              {query ?? "-"}
            </Heading>
            <div className="hidden lg:flex items-center justify-start mt-3.5">
              <div className="w-2/4 bg-glamoris-900 h-0.5 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="grid gap-3.5 grid-cols-1">
            {loading ? <Spinner /> : null}
            {isArticlesEmpty ? (
              <NotFoundBlog />
            ) : (
              articles.map((articles) => {
                return <FeaturedCard key={articles._id} {...articles} />;
              })
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
