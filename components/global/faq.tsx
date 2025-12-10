"use client";

import {
  HiCheckCircle,
  HiOutlineMinusSm,
  HiOutlinePlusSm,
} from "react-icons/hi";
import { Container } from "../layout";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { faq_content } from "@/constant/faq";
import { useState } from "react";
import { Heading, Paragraph } from "../text";
import Button from "../button";
import { FaWhatsapp } from "react-icons/fa";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container>
      <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <div>
          <Paragraph
            size="xl"
            className="font-semibold text-center md:text-start !text-glamorig-500"
          >
            FAQ
          </Paragraph>
          <Heading as={3} className="text-center capitalize md:text-start">
            tanya jawab seputar{" "}
            <span className="text-glamorig-500">layanan kami</span>
          </Heading>
          <Paragraph className="!text-glamoris-500 text-center md:text-start">
            Belum menemukan pertanyaan Anda?
          </Paragraph>
          <div className="flex items-center justify-center mt-3 md:justify-start">
            <a
              href="https://wa.me/6289606000101?text=Hallo Admin, Aku mau nanya ...."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="py-2 font-semibold">
                <FaWhatsapp className="w-7 h-7" />
                <span className="block">Tanyakan Sekarang</span>
              </Button>
            </a>
          </div>
        </div>
        <div className="space-y-5">
          {faq_content.map((item, idx) => {
            return (
              <QACard
                question={item.q}
                answer={item.a}
                key={idx}
                active={idx === activeIndex}
                onClick={() => setActiveIndex(idx)}
              ></QACard>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

function QACard({ question = "", answer = "", active = false, ...props }) {
  const [parent] = useAutoAnimate();

  return (
    <div
      className="w-full p-4 cursor-pointer bg-glamorig-100 rounded-2xl"
      {...props}
      ref={parent}
    >
      <div className="relative w-full">
        <p className="w-full max-w-lg pr-3 font-semibold text-glamoris-900 lg:pr-0">
          {question}
        </p>
        <button className="absolute top-1.5 right-0.5">
          {!active ? (
            <HiOutlinePlusSm className="text-glamorig-500" />
          ) : (
            <HiOutlineMinusSm className="text-glamorig-500" />
          )}
        </button>
      </div>
      {active && (
        <div className="mt-1.5 flex space-x-2">
          <p className="text-glamoris-700">{answer}</p>
        </div>
      )}
    </div>
  );
}
