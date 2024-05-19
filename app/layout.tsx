import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

export const metadata: Metadata = {
  title: "Misha Moroshko",
  description: "Personal website of Misha Moroshko",
  metadataBase: new URL("https://www.moroshko.me"),
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
