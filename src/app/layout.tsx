import type { Metadata } from "next";
import { montserrat } from '@/app/fonts'
import "./globals.css";

import Header from '@/app/components/header'

export const metadata: Metadata = {
  title: "Emilio González",
  description: "Code with 💚 by @emiliotsx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
