"use client";
import Breadcrumb from "@/components/breadcrumbs";
import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";
import Image from "next/image";
import Markdown from "react-markdown";
import TableOfContents from "../component/toc";
import { RootResponseByIdProps } from "@/types/response";
import { ArticleProps } from "@/types/article";
import { formatDate } from "@/lib/formatdate";
import { useToc } from "../service/useToc";
import Spinner from "@/components/spinner";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { useEffect, useRef } from "react";
import api from "@/lib/axios";

type ReadBlogProps = {
  articleDetails: RootResponseByIdProps<ArticleProps>;
};

export default function ReadBlog({ articleDetails }: ReadBlogProps) {
  const hasIncrement = useRef(false);
  const { toc, loading } = useToc(articleDetails.data.description);

  useEffect(() => {
    const slug = articleDetails?.data?.slug;
    if (!slug) return;

    if (hasIncrement.current) return;

    const increment = async () => {
      try {
        await api.post(`/article/increment-view/${slug}`);
        hasIncrement.current = true;
      } catch (error) {
        console.error("Failed to increment view:", error);
      }
    };

    increment();
  }, [articleDetails?.data?.slug]);

  return (
    <Container>
      <div className="py-8 lg:py-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              {
                label: articleDetails.data.title,
                href: `/blog/${articleDetails.data.slug}`,
              },
            ]}
          />
        </div>

        {/* Article Header */}
        <article className="max-w-6xl mx-auto">
          <header className="mb-12 space-y-6">
            <Heading
              as={1}
              className="text-4xl font-bold leading-tight text-center lg:text-5xl"
            >
              {articleDetails.data.title}
            </Heading>

            <Paragraph className="font-semibold text-center text-glamoris-800">
              {formatDate(
                articleDetails.data.updatedAt ?? articleDetails.data.date
              )}
            </Paragraph>

            {/* Featured Image */}
            <div className="relative w-full overflow-hidden rounded-lg aspect-video">
              <Image
                src={articleDetails.data.image.replace(
                  "/upload/",
                  "/upload/f_auto,q_auto,w_1152,dpr_auto/"
                )}
                alt={articleDetails.data.title}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 768px,
           1152px"
              />
            </div>
          </header>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-[250px_1fr] gap-12">
            {/* Table of Contents - Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-8">
                {loading ? (
                  <div className="flex items-center justify-center p-4">
                    <Spinner />
                  </div>
                ) : (
                  <TableOfContents items={toc} />
                )}
              </div>
            </aside>

            {/* Main Content */}
            <div className="min-w-0">
              {/* Mobile TOC */}
              <div className="mb-8 lg:hidden">
                {loading ? (
                  <div className="flex items-center justify-start p-4">
                    <Spinner />
                  </div>
                ) : (
                  <TableOfContents items={toc} />
                )}
              </div>

              {/* Article Content */}
              <div className="prose prose-gray lg:prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-lg">
                <Markdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeSlug]}
                >
                  {articleDetails.data.description}
                </Markdown>
              </div>
            </div>
          </div>
        </article>
      </div>
    </Container>
  );
}
