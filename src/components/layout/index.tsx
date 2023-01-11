import { FC, ReactNode } from 'react'
import Head from 'next/head'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const Layout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Emilio González | Software Engineer</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      <>{children}</>
      <Footer />
    </>
  )
}

interface Props {
  children: ReactNode
}
