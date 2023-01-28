"use client";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=poppins:200,400,700,900"
          rel="stylesheet"
        />
      </head>
      <body className="relative">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
