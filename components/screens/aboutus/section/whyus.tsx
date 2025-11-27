import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";
import { PiHandSoapBold } from "react-icons/pi";

export default function WhyGlamori() {
  return (
    <div className="py-12 bg-glamorig-100">
      <Container>
        <div className="flex items-center justify-center">
          <Heading as={2} className="text-center text-glamorig-500">
            Mengapa memilih Glamori ?
          </Heading>
        </div>
        <div className="mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </Container>
    </div>
  );
}

function Card() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-3.5 rounded-2xl bg-glamorig-300 aspect-square gap-3.5">
      <div>
        <PiHandSoapBold size={40} className="text-glamorig-500" />
      </div>
      <Paragraph className="px-5 text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, quisquam!
      </Paragraph>
    </div>
  );
}
