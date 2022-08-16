import Head from 'next/head';

import { Header } from 'src/components/header';
import { Footer } from 'src/components/footer';


export const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Emilio González | Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <>{children}</>
      <Footer />
    </>
  )
}