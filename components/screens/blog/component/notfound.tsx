import { Heading, Paragraph } from "@/components/text";
import { FaRegSadTear } from "react-icons/fa";

export default function NotFoundBlog() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-16 text-center text-gray-500">
      <FaRegSadTear size={48} className="mb-4" />
      <Heading as={5} className="font-semibold">
        Hasil pencarian tidak ditemukan.
      </Heading>
      <Paragraph>Silakan coba kata kunci lain untuk mencari artikel.</Paragraph>
    </div>
  );
}
