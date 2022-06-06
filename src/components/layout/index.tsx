import { Header } from 'src/components/header';
import { Footer } from 'src/components/footer';

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <>{children}</>
      <Footer />
    </>
  )
}