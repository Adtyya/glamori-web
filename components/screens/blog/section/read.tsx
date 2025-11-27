import Breadcrumb from "@/components/breadcrumbs";
import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";
import Image from "next/image";
import Markdown from "react-markdown";
import TableOfContents from "../component/toc";

const tocItems = [
  { id: "intro", text: "Pendahuluan", level: 1 },
  { id: "blockchain", text: "Apa itu Blockchain", level: 2 },
  { id: "benefit", text: "Manfaat Blockchain", level: 2 },
  { id: "gov", text: "Implementasi pada Pemerintah", level: 2 },
  { id: "kesimpulan", text: "Kesimpulan", level: 1 },
];

export default function ReadBlog() {
  return (
    <Container>
      <div className="py-12">
        <Breadcrumb
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Blog",
              href: "/blog",
            },
            {
              label: "Read",
              href: "/blog/read",
            },
          ]}
        />

        <div className="grid grid-cols-5 gap-3.5">
          <div className="col-span-1">
            <TableOfContents items={tocItems} />
          </div>
          <div className="grid grid-cols-1 col-span-4 gap-5">
            <Heading as={1} className="text-center">
              Lorem ipsum dolor sit amet.
            </Heading>
            <Paragraph className="font-medium text-center">
              27 November, 2025
            </Paragraph>
            <div className="relative w-full h-64 overflow-hidden lg:h-96 rounded-2xl drop-shadow-md">
              <Image
                src="https://placehold.co/3200x1200.png"
                alt="test"
                fill
                className="object-contain"
              />
            </div>
            <div className="max-w-full prose lg:prose-lg">
              <Markdown>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                cupiditate vero, aliquid nesciunt labore modi distinctio rerum
                suscipit cumque nihil perferendis maxime soluta quam placeat.
                Praesentium beatae harum cupiditate, sapiente rerum consequatur
                possimus? Ex animi a error quia autem, ratione accusantium fugit
                odit eum voluptas incidunt quo non sed tempore nesciunt
                corrupti, corporis ullam at! Quo repudiandae cumque modi,
                inventore ullam culpa corrupti, nostrum voluptatem numquam fugit
                eveniet veniam vero magni repellendus accusamus eos sit hic
                facere perferendis impedit, recusandae tempore doloremque! Illum
                expedita nobis, nostrum fugit minima consequatur in ea tenetur
                totam rem at quam animi dolor accusantium nemo temporibus,
                explicabo harum aut amet commodi sit. Rerum atque id, asperiores
                quasi voluptates accusantium! Illum, odio. Nobis explicabo qui
                libero ad, enim fugit iste quod ex, nostrum quibusdam adipisci
                obcaecati inventore dolor omnis nihil veritatis itaque! Modi,
                quis asperiores? Illo architecto quisquam accusantium veniam
                quae hic harum placeat, minus excepturi!
              </Markdown>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
