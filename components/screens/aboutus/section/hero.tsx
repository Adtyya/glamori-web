import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";
import Image from "next/image";
import { glamori_logo_big } from "@/constant/image";

export default function Hero() {
  return (
    <Container>
      <div className="py-12">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="flex items-center col-span-full lg:col-span-1">
            <div className="relative w-full overflow-hidden aspect-square rounded-2xl">
              <Image
                src={glamori_logo_big}
                alt="glamori_logo"
                fill
                className="object-contain scale-75"
              />
            </div>
          </div>
          <div className="col-span-full lg:col-span-2 space-y-3.5">
            <Heading as={1} className="capitalize text-glamorig-500">
              clinic story
            </Heading>
            <Paragraph size="lg" className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sit
              recusandae incidunt quibusdam deleniti dolorum voluptate explicabo
              voluptatem corporis cupiditate, laboriosam dignissimos quod enim,
              aut itaque ipsam ea facilis amet atque iste eveniet eligendi animi
              doloremque. Illo adipisci vel veniam, non autem facere minima
              fugit saepe consectetur perferendis et beatae repudiandae dolorum
              quaerat? Animi optio doloremque nostrum pariatur fuga voluptates,
              voluptatum officiis. Sapiente iste dignissimos odio quibusdam eum
              vero ad, aspernatur modi id rerum ullam, quisquam vitae enim
              molestiae corrupti, odit distinctio. Corporis facilis, error quas
              magni vitae sint assumenda explicabo ullam eos, repudiandae
              veritatis. Voluptates pariatur, saepe ut amet id corporis ipsum
              alias libero fugiat corrupti atque vel reiciendis officiis
              deserunt placeat porro. Omnis dignissimos accusantium deleniti
              sint vel similique laudantium recusandae in delectus soluta.
              Adipisci illum nemo, at neque consequuntur fugit nobis mollitia
              rem vero optio pariatur eveniet recusandae placeat officiis magnam
              reiciendis nesciunt, non numquam harum doloremque!
            </Paragraph>
            <Paragraph size="lg" className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sit
              recusandae incidunt quibusdam deleniti dolorum voluptate explicabo
              voluptatem corporis cupiditate, laboriosam dignissimos quod enim,
              aut itaque ipsam ea facilis amet atque iste eveniet eligendi animi
              doloremque. Illo adipisci vel veniam, non autem facere minima
              fugit saepe consectetur perferendis et beatae repudiandae dolorum
              quaerat? Animi optio doloremque nostrum pariatur fuga voluptates,
              voluptatum officiis. Sapiente iste dignissimos odio quibusdam eum
              vero ad, aspernatur modi id rerum ullam, quisquam vitae enim
              molestiae corrupti, odit distinctio. Corporis facilis, error quas
              magni vitae sint assumenda explicabo ullam eos, repudiandae
              veritatis. Voluptates pariatur, saepe ut amet id corporis ipsum
              alias libero fugiat corrupti atque vel reiciendis officiis
              deserunt placeat porro. Omnis dignissimos accusantium deleniti
              sint vel similique laudantium recusandae in delectus soluta.
              Adipisci illum nemo, at neque consequuntur fugit nobis mollitia
              rem vero optio pariatur eveniet recusandae placeat officiis magnam
              reiciendis nesciunt, non numquam harum doloremque!
            </Paragraph>
          </div>
        </div>
      </div>
    </Container>
  );
}
