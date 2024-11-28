import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale();
  console.log('locale', locale)

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${montserrat.className} antialiased dark:bg-dark`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <Navbar />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
