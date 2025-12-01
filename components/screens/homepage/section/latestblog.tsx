"use client";
import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";
import { useArticles } from "../service/useArticle";
import { Card } from "../../blog/component/blog_card";
import EmptyBlog from "../../blog/component/empty";
import Spinner from "@/components/spinner";

export default function LatestBlog() {
  const { articles, loading, error } = useArticles(3);

  const isArticlesEmpty = !loading && !error && articles.length === 0;

  return (
    <Container>
      <div className="py-12">
        <div className="flex items-center justify-start">
          <div className="text-start">
            <Paragraph size="xl" className="font-semibold !text-glamorig-500">
              News & Blog
            </Paragraph>
            <Heading as={3} className="capitalize">
              our latest news & blog
            </Heading>
            <div className="flex items-center justify-start mt-3.5">
              <div className="w-2/4 bg-glamoris-900 h-0.5 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          {loading ? <Spinner /> : null}
          {isArticlesEmpty ? (
            <EmptyBlog />
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Card
                  key={article._id}
                  imageSize="normal"
                  showSpoiler
                  {...article}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
