"use client";

import { Container } from "@/components/layout";
import Pagination from "@/components/pagination";
import { Heading, Paragraph } from "@/components/text";
import type { PaginationBlogPageProps } from "../pagination";
import { Card } from "../component/blog_card";
import { useRouter } from "next/navigation";
import EmptyBlog from "../component/empty";

export default function PaginationSection({
  articleList,
}: PaginationBlogPageProps) {
  const router = useRouter();

  const isArticlesEmpty = articleList.data.docs.length === 0;

  return (
    <Container>
      <div className="py-12">
        <div className="flex flex-col items-center justify-between lg:flex-row gap-3.5">
          <div className="text-center lg:text-start">
            <Paragraph size="xl" className="font-semibold !text-glamorig-500">
              Blog
            </Paragraph>
            <Heading as={3} className="capitalize">
              Menampilkan semua blog
            </Heading>
            <div className="hidden lg:flex items-center justify-start mt-3.5">
              <div className="w-2/4 bg-glamoris-900 h-0.5 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="grid gap-3.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {isArticlesEmpty ? (
              <div className="col-span-full">
                <EmptyBlog />
              </div>
            ) : (
              articleList.data.docs?.map((articles) => {
                return <Card key={articles._id} {...articles} />;
              })
            )}
          </div>
        </div>
        <div className="mt-5">
          <Pagination
            currentPage={articleList.data.page}
            totalPages={articleList.data.totalPages}
            onPageChange={(pageNumber) =>
              router.push(`/blog/lihat-semua/${pageNumber}`)
            }
          />
        </div>
      </div>
    </Container>
  );
}
