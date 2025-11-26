import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";

export default function Treatment() {
  return (
    <Container>
      <div className="py-12">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <Paragraph size="xl" className="font-semibold !text-glamorig-500">
              Treatments
            </Paragraph>
            <Heading as={3} className="capitalize">
              what we can do for you
            </Heading>
            <div className="flex items-center justify-center mt-3.5">
              <div className="w-2/4 bg-glamoris-900 h-0.5 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
