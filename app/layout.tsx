import "./globals.css";
import "swiper/css";
import { Footer, NavigationBar } from "@/components/layout";
import NextTopLoader from "nextjs-toploader";

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
