import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SiteFlyerPopup } from "@/components/SiteFlyerPopup";
import { siteConfig } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL("https://paradigmshiftgh.com"),
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <SiteFlyerPopup>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SiteFlyerPopup>
      </body>
    </html>
  );
}
