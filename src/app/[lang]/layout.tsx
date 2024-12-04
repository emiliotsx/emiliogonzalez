import type { Metadata } from "next"

import { montserrat } from '@/app/fonts'

import "../globals.css";

export const metadata: Metadata = {
  title: "Emilio González",
  description: "Code with 💚 by @emiliotsx",
  icons: {
    icon: '/favicon.ico'
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body
        className={`${montserrat.className} antialiased dark:bg-dark`}
      >
        {children}
      </body>
    </html>
  );
}
