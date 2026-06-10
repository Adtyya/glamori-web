import React from "react";
import { Metadata } from "next";
import ProductSection from "@/components/screens/homepage/section/ProductSection";
import WhatsAppFloat from "@/components/screens/homepage/component/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Miss V Series — Perawatan Intim Wanita Terbaik | Glamori Aesthetic Clinic",
  description:
    "Rangkaian treatment Miss V Series untuk kebersihan, kesehatan, dan kekencangan area kewanitaan. Ditangani dokter wanita berlisensi dengan teknologi medis aman di Jakarta & Lampung.",
  keywords: [
    "Miss V Series",
    "perawatan intim wanita",
    "klinik Miss V Jakarta",
    "klinik Miss V Lampung",
    "V-Rejuvenation",
    "V-FEMILIFT",
    "V-Shoot",
    "V-Inject",
    "V-Lift",
    "V-Fill",
    "mengencangkan area kewanitaan",
    "perawatan labia",
    "klinik kecantikan",
  ],
  alternates: {
    canonical: "https://glamori.app/product/miss-v-series",
  },
  openGraph: {
    title: "Miss V Series — Perawatan Intim Wanita Terbaik | Glamori Aesthetic Clinic",
    description:
      "Rangkaian treatment Miss V Series untuk kebersihan, kesehatan, dan kekencangan area intim wanita. Hubungi dokter berlisensi kami hari ini.",
    url: "https://glamori.app/product/miss-v-series",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1591343395082-e120087004b4?w=800&q=80",
        alt: "Miss V Series Glamori Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miss V Series — Perawatan Intim Wanita Terbaik | Glamori Aesthetic Clinic",
    description:
      "Rangkaian treatment Miss V Series untuk kebersihan, kesehatan, dan kekencangan area intim wanita.",
    images: ["https://images.unsplash.com/photo-1591343395082-e120087004b4?w=800&q=80"],
  },
};

export default function MissVSeriesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Apakah treatment Miss V aman?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Semua prosedur dikerjakan dokter berlisensi dengan alat steril dan metode medis yang teruji aman.",
        },
      },
      {
        "@type": "Question",
        "name": "Berapa lama hasilnya bertahan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tergantung jenis treatment — mulai dari beberapa minggu (PRP) hingga beberapa bulan (collagen stimulator). Dijelaskan saat konsultasi.",
        },
      },
      {
        "@type": "Question",
        "name": "Apakah ada downtime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Beberapa treatment seperti V-Inject dan V-Shoot tanpa downtime sehingga bisa langsung beraktivitas.",
        },
      },
      {
        "@type": "Question",
        "name": "Apakah ditangani dokter wanita?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ya, untuk kenyamanan dan privasi, treatment area intim ditangani tenaga medis wanita berlisensi.",
        },
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Miss V Series - Perawatan Area Intim Wanita",
    "image": "https://images.unsplash.com/photo-1591343395082-e120087004b4?w=600&q=80",
    "description":
      "Rangkaian perawatan intim wanita untuk menjaga kebersihan, kesehatan, dan kekencangan area kewanitaan — dikerjakan dokter berlisensi dengan prosedur medis yang aman dan nyaman.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Glamori Aesthetic Clinic",
      "image": "https://glamori.app/assets/logo/glamori_white_square.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl. Muara Karang Bar., Pluit, Penjaringan",
        "addressLocality": "Jakarta Utara",
        "postalCode": "14450",
        "addressCountry": "ID",
      },
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "IDR",
      "price": "850000",
      "description": "Mulai dari Rp 850.000 / sesi",
    },
  };

  return (
    <>
      {/* Dynamic Structured SEO Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <main>
        <ProductSection />
      </main>

      <WhatsAppFloat />
    </>
  );
}
