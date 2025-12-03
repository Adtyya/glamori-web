"use client";
import { SearchBar } from "@/components/input";
import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";
import { Card, FeaturedCard } from "../component/blog_card";
import type { BlogProps } from "../blog";
import EmptyBlog from "../component/empty";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FeaturedBlog({ articleList }: BlogProps) {
  const router = useRouter();

  const [search, setSearch] = useState<string>("");

  const latestArticle = articleList.data.docs[0];
  const secondAndThirdArticle = articleList.data.docs.slice(1, 3);

  const isLatestArticleAvailable = Boolean(latestArticle);
  const isSecondAndThirdArticleAvailable = secondAndThirdArticle.length > 0;

  return (
    <Container>
      <div className="py-12">
        <div className="flex flex-col items-center justify-between lg:flex-row gap-3.5">
          <div className="text-center lg:text-start">
            <Paragraph size="xl" className="font-semibold !text-glamorig-500">
              News & Blog
            </Paragraph>
            <Heading as={3} className="capitalize">
              Berita & Artikel Terbaru dari Kami
            </Heading>
            <div className="hidden lg:flex items-center justify-start mt-3.5">
              <div className="w-2/4 bg-glamoris-900 h-0.5 rounded-full"></div>
            </div>
          </div>
          <div className="w-96">
            <SearchBar
              onChange={(value: string) => setSearch(value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  if (!search) return;
                  router.push(`/blog/search?query=${search}`);
                }
              }}
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="grid gap-3.5 grid-cols-1 md:grid-cols-12">
            {!isLatestArticleAvailable ? (
              <div className="col-span-12 md:col-span-8 lg:col-span-9">
                <EmptyBlog />
              </div>
            ) : (
              <div className="col-span-12 md:col-span-8 lg:col-span-9">
                <FeaturedCard {...latestArticle} />
              </div>
            )}

            {!isSecondAndThirdArticleAvailable ? (
              <div className="col-span-12 md:col-span-4 lg:col-span-3 grid grid-cols-1 gap-3.5 mt-3 md:mt-0">
                <EmptyBlog />
              </div>
            ) : (
              <div className="col-span-12 md:col-span-4 lg:col-span-3 grid grid-cols-1 gap-3.5 mt-3 md:mt-0">
                {secondAndThirdArticle.map((article) => {
                  return (
                    <Card key={article._id} imageSize="normal" {...article} />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
