import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "APEX Detailing | Ceramic Coating & Auto Detailing",
  description:
    "Premium auto detailing, paint correction, and ceramic coating for discerning drivers in Austin, Texas.",
  openGraph: {
    title: "APEX Detailing | Your car, at its absolute best",
    description:
      "Premium auto detailing, paint correction, and ceramic coating in Austin, Texas.",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#090a0b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${manrope.variable} ${sora.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}
