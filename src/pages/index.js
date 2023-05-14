import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import {Navbar,ImageCard, Hero, Clients, Footer, Info1, Info2, Products, Services, Testimonials} from '../componets/'
import { Sliders } from '../constants'

export default function Home() {
  return (
    <div className='body-box'>
      <Head>
        <title>Hesta</title>
      </Head>
      <Hero />
      <Clients />
      <Info1 />
      <Services />
      <Sliders />
      <Testimonials />
      <Products />
      <Info2 />
      <Footer />
    </div>
  )
}
