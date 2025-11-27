"use client";
import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";

export default function Subscribe() {
  return (
    <Container>
      <div className="py-12">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-2xl text-center">
            <Paragraph size="xl" className="font-semibold !text-glamorig-500">
              Subscribe
            </Paragraph>

            <Heading as={3} className="capitalize">
              Don’t Miss{" "}
              <span className="!text-glamorig-500">Our Best Offers</span>
            </Heading>

            <Paragraph className="!text-glamoris-700" size="lg">
              Drop your email below to get news, exciting promotions, and fresh
              updates delivered to you regularly.
            </Paragraph>
            <div className="flex items-center justify-center mt-3.5">
              <div className="w-2/4 bg-glamoris-900 h-0.5 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="relative mt-5">
          <div className="flex items-center justify-center">
            <div className="flex overflow-hidden rounded-full shadow-sm bg-glamoris-100">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-56 px-5 py-3 text-sm bg-transparent sm:w-72 lg:w-96 focus:outline-none"
              />
              <button className="px-6 py-3 font-medium text-white transition-all bg-glamorig-500 whitespace-nowrap hover:bg-glamorig-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
