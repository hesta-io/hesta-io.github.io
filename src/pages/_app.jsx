import Head from 'next/head'
import '@/styles/globals.css'
import '@/componets/Navbar/navbar.css'
import '@/componets/Hero/hero.css'
import '@/componets/Clients/clients.css'
import '@/componets/About/about.css'
import '@/componets/Services/services.css'
import '@/componets/ServiceGrid/servicegrid.css'
import '@/componets/Products/products.css'
import '@/componets/Footer/footer.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hesta</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
