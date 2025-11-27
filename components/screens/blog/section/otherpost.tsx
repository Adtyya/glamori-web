import { Container } from "@/components/layout";
import { Heading } from "@/components/text";
import { Card } from "../component/blog_card";

export default function OtherPost() {
  return (
    <Container>
      <div className="py-12">
        <Heading>Other Articles</Heading>
        <div className="mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            <Card spoiler imageSize="large" />
            <Card spoiler imageSize="large" />
            <Card spoiler imageSize="large" />
          </div>
        </div>
      </div>
    </Container>
  );
}
