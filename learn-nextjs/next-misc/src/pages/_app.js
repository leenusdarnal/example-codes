import '../styles/globals.css'
import '../styles/layout.css'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
