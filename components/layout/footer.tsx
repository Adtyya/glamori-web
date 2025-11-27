import Link from "next/link";
import Container from "./container";
import Image from "next/image";
import { glamori_logo_navbar } from "@/constant/image";
import { Paragraph } from "../text";
import { menu_list_footer } from "@/constant/navigation";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Button from "../button";

export default function Footer() {
  return (
    <>
      {/* Tombol Chat WhatsApp */}
      <div className="fixed z-10 right-4 bottom-4 lg:right-10 lg:bottom-10 lg:block">
        <Button className="font-semibold !py-5 lg:!py-2">
          <FaWhatsapp className="w-7 h-7" />
          <span className="hidden lg:block">Chat WhatsApp</span>
        </Button>
      </div>
      <div className="px-4 py-8 bg-glamorig-500 lg:px-0">
        <Container>
          {/* Logo */}
          <div className="flex justify-center mb-8 lg:justify-start">
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
                className="w-auto h-auto"
              />
            </Link>
          </div>

          {/* Menu */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {menu_list_footer.slice(0, 2).map((r, i) => (
              <div key={i}>
                <Paragraph className="mb-3 font-bold" size="lg">
                  {r.title}
                </Paragraph>
                {r.content.map((x, y) => (
                  <Link key={y} href={x.path}>
                    <Paragraph className="antialiased capitalize duration-100 hover:scale-105 hover:text-white">
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
                <Paragraph className="mb-3 font-bold" size="lg">
                  {r.title}
                </Paragraph>
                {r.content.map((x, y) => (
                  <Link key={y} href={x.path}>
                    <Paragraph className="antialiased capitalize duration-100 hover:scale-105 hover:text-white">
                      {x.text}
                    </Paragraph>
                  </Link>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col gap-4 pt-5 mt-10 border-t border-white/30 lg:flex-row lg:items-center lg:justify-between">
            <Paragraph className="font-semibold text-center lg:text-left">
              &copy; {new Date().getFullYear()} Glamori Clinic
            </Paragraph>

            {/* Contact & Socials */}
            <div className="flex flex-col items-center lg:items-start">
              <Paragraph className="font-semibold">Hubungi Kami</Paragraph>
              <div className="flex items-center gap-4 mt-2">
                <a
                  href={process.env.NEXT_PUBLIC_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={22} />
                </a>
                <a
                  href={process.env.NEXT_PUBLIC_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={22} />
                </a>
                <a
                  href={process.env.NEXT_PUBLIC_TIKTOK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok size={22} />
                </a>
                <a
                  href={process.env.NEXT_PUBLIC_PLAYSTORE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2.5 items-center border-2 px-3.5 py-1.5 border-black rounded-full"
                >
                  <IoLogoGooglePlaystore size={22} />
                  <Paragraph className="font-semibold">
                    Unduh Aplikasi
                  </Paragraph>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
