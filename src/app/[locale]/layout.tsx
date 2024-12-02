import type { Metadata } from "next";
import { NextIntlClientProvider, useLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { routing } from '@/i18n/routing';
import { montserrat } from '@/app/fonts'

import "../globals.css";

import Navbar from '@/app/components/navbar/index'

export const metadata: Metadata = {
  title: "Emilio González",
  description: "Code with 💚 by @emiliotsx",
  icons: {
    icon: '/favicon.ico'
  }
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  const locale = useLocale()

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

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
