import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

export const metadata: Metadata = {
  title: "Misha Moroshko",
  description: "Personal website of Misha Moroshko",
  openGraph: {
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-grid bg-fixed">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
