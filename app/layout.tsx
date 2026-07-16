import type { Metadata, Viewport } from "next";
import { DM_Sans, IBM_Plex_Mono } from "next/font/google";

import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "APEX Detailing | Ceramic Coating & Auto Detailing",
  description:
    "Premium auto detailing, paint correction, and ceramic coating for discerning drivers in Austin, Texas.",
  openGraph: {
    title: "APEX Detailing | Surface Studio",
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
  themeColor: "#0a0b0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${dmSans.variable} ${ibmPlexMono.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}
