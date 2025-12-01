import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";
import { Card } from "../component/blog_card";
import { BlogProps } from "../blog";
import { FaRegSadTear } from "react-icons/fa";
import EmptyBlog from "../component/empty";

export default function OtherPost({ articleList }: BlogProps) {
  const articleSlice = articleList?.data?.docs?.slice(3) || [];
  const isEmpty = articleSlice.length === 0;

  return (
    <Container>
      <div className="py-12">
        <Heading>Other Articles</Heading>

        {isEmpty ? (
          <EmptyBlog />
        ) : (
          <div className="mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {articleSlice.map((article) => (
                <Card key={article._id} imageSize="normal" {...article} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
