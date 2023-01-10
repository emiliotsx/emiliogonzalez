import type { AppProps } from 'next/app'

import { Layout } from 'src/components/layout'

import '@/styles/index.css'
import '@/styles/tailwind.css'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  /** QUITAR EL LAYOUT GLOBAL */
  return (
    <div className='root'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
