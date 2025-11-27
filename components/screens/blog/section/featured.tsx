"use client";
import { SearchBar } from "@/components/input";
import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";
import { Card, FeaturedCard } from "../component/blog_card";

export default function FeaturedBlog() {
  return (
    <Container>
      <div className="py-12">
        <div className="flex flex-col items-center justify-between lg:flex-row gap-3.5">
          <div className="text-center lg:text-start">
            <Paragraph size="xl" className="font-semibold !text-glamorig-500">
              News & Blog
            </Paragraph>
            <Heading as={3} className="capitalize">
              our latest news & blog
            </Heading>
            <div className="hidden lg:flex items-center justify-start mt-3.5">
              <div className="w-2/4 bg-glamoris-900 h-0.5 rounded-full"></div>
            </div>
          </div>
          <div className="w-96">
            <SearchBar />
          </div>
        </div>
        <div className="mt-5">
          <div className="grid gap-3.5 grid-cols-1 md:grid-cols-12">
            <div className="col-span-12 md:col-span-8 lg:col-span-9">
              <FeaturedCard />
            </div>

            <div className="col-span-12 md:col-span-4 lg:col-span-3 grid grid-cols-1 gap-3.5 mt-3 md:mt-0">
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
