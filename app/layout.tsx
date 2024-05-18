import "./globals.css";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Header } from "./components/Header/Header";

export const metadata: Metadata = {
  title: "Misha Moroshko",
  description: "Personal website of Misha Moroshko",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-grid bg-fixed">
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
