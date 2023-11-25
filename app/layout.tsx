import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";
import { Fragment } from "react";
import Navbar from "../components/Navbar";

//👇 Configure our local font object
const myFont = localFont({ src: "../public/ConfigAltRegular.ttf" });

export const metadata: Metadata = {
  title: "AIPatrn",
  description: "Revolutionalize your project with AI Powered Pattern ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <html lang="en">
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <body className={myFont.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </Fragment>
  );
}
