import Link from "next/link";
import Container from "./container";
import Image from "next/image";
import { glamori_logo_navbar } from "@/constant/image";
import { Paragraph } from "../text";
import { menu_list_footer } from "@/constant/navigation";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-glamorig-500 px-4 py-8 lg:px-0">
      <Container>
        {/* Logo */}
        <div className="flex justify-center lg:justify-start mb-8">
          <Link
            id="glamori_app"
            aria-label="glamori_logo"
            href="/"
            className="flex items-center gap-2 whitespace-nowrap focus:outline-none"
          >
            <Image
              src={glamori_logo_navbar}
              width={110}
              height={55}
              alt="glamori_logo"
              quality={100}
              className="h-auto w-auto"
            />
          </Link>
        </div>

        {/* Menu */}
        <div
          className="
            grid gap-8
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-5
          "
        >
          {menu_list_footer.slice(0, 2).map((r, i) => (
            <div key={i}>
              <Paragraph className="font-bold mb-3" size="lg">
                {r.title}
              </Paragraph>
              {r.content.map((x, y) => (
                <Link key={y} href={x.path}>
                  <Paragraph className="capitalize hover:scale-105 duration-100 antialiased hover:text-white">
                    {x.text}
                  </Paragraph>
                </Link>
              ))}
            </div>
          ))}

          {/* Hidden columns for desktop spacing only */}
          <div className="hidden lg:block" />
          <div className="hidden lg:block" />

          {menu_list_footer.slice(2).map((r, i) => (
            <div key={i}>
              <Paragraph className="font-bold mb-3" size="lg">
                {r.title}
              </Paragraph>
              {r.content.map((x, y) => (
                <Link key={y} href={x.path}>
                  <Paragraph className="capitalize hover:scale-105 duration-100 antialiased hover:text-white">
                    {x.text}
                  </Paragraph>
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div
          className="
            mt-10 pt-5 border-t border-white/30
            flex flex-col gap-4
            lg:flex-row lg:items-center lg:justify-between
          "
        >
          <Paragraph className="font-semibold text-center lg:text-left">
            &copy; {new Date().getFullYear()} Glamori Clinic
          </Paragraph>

          {/* Contact & Socials */}
          <div className="flex flex-col items-center lg:items-end">
            <Paragraph className="font-semibold">Hubungi Kami</Paragraph>
            <div className="flex gap-4 mt-2">
              <a
                href={process.env.NEXT_PUBLIC_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={22} className="hover:scale-110 transition" />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={22} className="hover:scale-110 transition" />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_TIKTOK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok size={22} className="hover:scale-110 transition" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
