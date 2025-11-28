import "./globals.css";
import "swiper/css";
import { Footer, NavigationBar } from "@/components/layout";
import NextTopLoader from "nextjs-toploader";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_CODE",
  // },

  generator: "Next.js",
  referrer: "origin",
  applicationName: "Glamori App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <NavigationBar />
        <NextTopLoader color="#E3AC14" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
