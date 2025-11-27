import "./globals.css";
import "swiper/css";
import { Footer, NavigationBar } from "@/components/layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
