"use client";

import Link from "next/link";
import Container from "./container";
import Image from "next/image";
import { glamori_logo_navbar } from "@/constant/image";
import { Paragraph } from "../text";
import { menu_list_footer } from "@/constant/navigation";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Dropdown from "../button/dropdown";

const branch_list = [
  {
    label: "Glamori Lampung",
    value: "glamori-lampung",
  },
  {
    label: "Glamori Jakarta",
    value: "glamori-jakarta",
  },
];

export default function Footer() {
  const handleSelectBranch = (value: string) => {
    const message = encodeURIComponent(
      "Halo kak, saya ingin konsultasi dan bertanya mengenai treatment yang tersedia"
    );

    if (value === "glamori-lampung") {
      window.open(`https://wa.me/6289606000101?text=${message}`, "_blank");
      return;
    }

    window.open(`https://wa.me/6285270010701?text=${message}`, "_blank");
  };

  return (
    <>
      {/* Tombol Chat WhatsApp */}
      <div className="fixed z-20 right-4 bottom-4 lg:right-10 lg:bottom-10 lg:block">
        <Dropdown
          items={branch_list}
          direction="up"
          onSelect={handleSelectBranch}
        >
          <FaWhatsapp className="w-7 h-7" />
          <span className="block">Chat WhatsApp</span>
        </Dropdown>
      </div>
      <div className="relative px-4 py-8 bg-glamorig-200 lg:px-0">
        <div
          className="absolute inset-0 bg-center bg-cover opacity-30"
          style={{ backgroundImage: "url('/assets/images/footer_bg.jpg')" }}
        />
        <div className="relative z-10">
          <Container>
            {/* Logo */}
            <div className="flex justify-center mb-8 lg:justify-start">
              <Link
                href="/"
                className="flex items-center gap-2 whitespace-nowrap focus:outline-none"
                aria-label="Glamori Home"
              >
                <Image
                  src={glamori_logo_navbar}
                  width={110}
                  height={55}
                  alt="Glamori Logo"
                  priority
                  sizes="110px"
                />
              </Link>
            </div>

            {/* Menu */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {menu_list_footer.map((r, i) => (
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
              <div className="flex flex-col items-start">
                <Paragraph className="font-semibold">Hubungi Kami</Paragraph>
                <div className="flex flex-wrap items-center gap-4 mt-2">
                  <Link href="/hubungi-kami">
                    <FaWhatsapp size={22} />
                  </Link>
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
                    className="flex gap-2.5 items-center border-2 px-3.5 py-1.5 border-black rounded-full relative"
                  >
                    <IoLogoGooglePlaystore size={22} />
                    <Paragraph className="font-semibold">
                      Unduh Aplikasi
                    </Paragraph>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col gap-4 pt-5 mt-10 border-t border-white/30 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex gap-3.5 items-center">
                <Paragraph className="font-semibold text-left" size="sm">
                  &copy; {new Date().getFullYear()} Glamori Clinic. All Rights
                  Reserved
                </Paragraph>
                <a href="https://evetechsolution.com/id" target="_blank">
                  <Paragraph
                    className="font-semibold hover:underline"
                    size="sm"
                  >
                    Powered by Evetech Solution v1.00
                  </Paragraph>
                </a>
              </div>

              <div className="flex items-center justify-start gap-3.5">
                <Link href="#">
                  <Paragraph className="antialiased capitalize duration-100 hover:scale-105 hover:text-white">
                    Terms Of Service
                  </Paragraph>
                </Link>
                <Link href="#">
                  <Paragraph className="antialiased capitalize duration-100 hover:scale-105 hover:text-white">
                    Privacy Policy
                  </Paragraph>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
