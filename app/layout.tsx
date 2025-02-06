import { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@/styles/globals.css";
import "@/styles/fonts.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Braille Generator",
  description:
    "A very basic application to convert text to braille code images.",
  openGraph: {
    title: "Braille Generator",
    description:
      "A very basic application to convert text to braille code images.",
    type: "website",
    locale: "en_US",
    url: "https://braille-generator.vercel.app/",
    images: [
      {
        url: "/braille-generator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Braille Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Braille Generator",
    description:
      "A very basic application to convert text to braille code images.",
    images: ["/braille-generator-og.jpg"],
    creator: "@mattmillsxyz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
