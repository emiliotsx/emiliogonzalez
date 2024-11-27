import type { Metadata } from "next";
import { montserrat } from '@/app/fonts'
import "./globals.css";

import Navbar from '@/app/components/navbar/index'

export const metadata: Metadata = {
  title: "Emilio González",
  description: "Code with 💚 by @emiliotsx",
  icons: {
    icon: '/favicon.ico'
  }
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
        {children}
        <Navbar />
      </body>
    </html>
  );
}
